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
use DateTime;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Exception\NotNormalizableValueException;


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
        ValidatorInterface $validator,
        SerializerInterface $serializer
    ): Response {
        try {
            $params = $request->request;
            $type_partie = $params->get('type_partie');
            $date_partie = (new DateTime('now'))->format('Y-m-d H:i:s');
            $reponses = $params->get('reponses');
            $users = $params->get('users');
            // $entry = $serializer->deserialize($content, Partie::class, 'json', [
            //     'datetime_format' => 'Y-m-d'
            // ]);

            if (in_array($type_partie, TypePartie::TYPES_PARTIE)) {
                dump($date_partie);
            }

            dump($reponses, $users);
            // $errors = $validator->validate($entry);
            // if (count($errors) > 0) {
            //     return $this->json($errors, Response::HTTP_BAD_REQUEST);
            // }
            // if ($entry->getContent() == '') {
            //     throw new NotEncodableValueException('Content empty');
            // }


            // $entityManager->persist($entry);
            // $entityManager->flush();

            // $json = $serializer->serialize($entry, 'json', [
            //     'datetime_format' => 'Y-m-d'
            // ]);
            // return new Response($json, Response::HTTP_CREATED, [
            //     'content-type' => 'application/json'
            // ]);

            
            return new Response($content, Response::HTTP_OK, [
                'content-type' => 'application/json'
            ]);
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
