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
use App\Services\Interfaces\Services\MailerServiceInterface;
use App\Services\UserService;
use DateTime;
use Exception;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Exception\NotNormalizableValueException;
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
        FlashBagInterface $flashbag,
        UserService $userService,
        MailerServiceInterface $mailerService
    ) {
        try {
            $params = $request->request;
            $type_partie = $params->get('type_partie');
            $date_partie = new DateTime('now');
            $reponses = $params->get('reponses');
            $userId = $params->get('users');
            $debriefing = $params->get('debriefing');
            $objectif = $params->get('objectif');

            $reponses = json_decode($reponses);
            $debriefing = json_decode($debriefing);
            // $entityManager->persist($partie);

            $partie = new Partie();

            if (!in_array($type_partie, TypePartie::TYPES_PARTIE)) {
                return new Response("Erreur lors de l'enregistrement de la partie", Response::HTTP_BAD_REQUEST);
            }

            $type_partie = $entityManager->getRepository(TypePartie::class)->findOneBy(["acro" => $type_partie]);

            $partie->setTypePartie($type_partie);
            $partie->setDatePartie($date_partie);
            $partie->setUser($userService->getUser($userId));
            $partie->setObjectif($objectif);
            
            $json_responses = json_encode($reponses);
            $json_debriefing = json_encode($debriefing);
            
            $json = json_decode($json_responses, true);
            $json_debrief = json_decode($json_debriefing, true);
            
            $minOne = true;
            
            $partie->setReponses($json);
            $partie->setDebriefing($json_debrief);

            $mailerService->sendEmail('pierre61250@yahoo.fr', 'Nouvelle Partie', $partie);

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
