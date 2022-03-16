<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Repository\PartieRepository;
use App\Entity\Partie;
use App\Entity\TypePartie;
use App\Entity\User;
use DateTime;
use Exception;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Exception\NotNormalizableValueException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;


class PartieController extends AbstractController
{
    /**
     * @Route("/api/parties", name="parties", methods="GET")
     */
    public function findAll(PartieRepository $repository, SerializerInterface $serializer): Response
    {
        try {
            $entries = $repository->findAll();
            $json = $serializer->serialize($entries, 'json', [
                'datetime_format' => 'Y-m-d'
            ]);
            // var_dump($json);
            // dump($json);
            return new Response($json, Response::HTTP_OK, [
                'content-type' => 'application/json'
            ]);
        } catch (Throwable $e) {
            return $this->json([
                'errorType' => get_class($e),
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/api/partie", name="partie_create", methods="POST")
     */
    public function create(
        EntityManagerInterface $entityManager,
        Request $request,
        FlashBagInterface $flashbag
    ) {
        try {
            $params = $request->request;
            $type_partie = $params->get('type_partie');
            $date_partie = new DateTime('now');
            $reponses = $params->get('reponses');
            $users = $params->get('users');
            $tab_users = [];

            if(gettype($users) == "string"){
                array_push($tab_users, $users);
            }
            else{
                return new Response("Erreur lors de l'enregistrement des utilisateurs", Response::HTTP_BAD_REQUEST);
            }

            $reponses = json_decode($reponses);
            // $entityManager->persist($partie);



            $partie = new Partie();

            if (!in_array($type_partie, TypePartie::TYPES_PARTIE)) {
                return new Response("Erreur lors de l'enregistrement de la partie", Response::HTTP_BAD_REQUEST);
            }

            $type_partie = $entityManager->getRepository(TypePartie::class)->findOneBy(["acro" => $type_partie]);

            $partie->setTypePartie($type_partie);
            $partie->setDatePartie($date_partie);

            $json_responses = json_encode($reponses);

            $json = json_decode($json_responses, true);

            $minOne = true;


            foreach ($tab_users as $user_id) {
                $user = $entityManager->getRepository(User::class)->findOneBy(["id" => $user_id]);
                if (!is_null($user)) {
                    try {
                        for ($i = 1; $i < 10; $i++) {
                            defined($reponses->{$user_id}->{'question' . $i});
                        }
                        $partie->addUser($user);
                    } catch (Exception $e) {
                        $flashbag->add('error', "Erreur : Une question est manquante");
                    }
                } else {
                    $minOne = false;
                }
            }
            
            $partie->setReponses($json);

            try {
                if ($minOne) {        
                    $entityManager->persist($partie);
                    $entityManager->flush();
                    return new Response('OK', Response::HTTP_OK);
                } else
                    return new Response('Erreur', Response::HTTP_BAD_REQUEST);
            } catch (Exception $e) {
                $flashbag->add('error', $e);
            }
        } catch (NotEncodableValueException | NotNormalizableValueException $e) {
            return $this->json([
                'errorType' => get_class($e),
                'message' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        } catch (Throwable $e) {
            return $this->json([
                'errorType' => get_class($e),
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
