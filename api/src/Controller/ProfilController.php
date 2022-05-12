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
use App\Services\UserService;
use DateTime;
use Exception;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Exception\NotNormalizableValueException;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class ProfilController extends AbstractController
{
    #[Route('/profil', name: 'app_profil')]
    public function index(): Response
    {
        return $this->render('profil/index.html.twig', [
            'controller_name' => 'ProfilController',
        ]);
    }

    #[Route('/api/updateProfil', name: 'app_updateProfil')]
    public function update(
        EntityManagerInterface $entityManager,
        Request $request,
        FlashBagInterface $flashbag,
        UserPasswordHasherInterface $userPasswordHasher
    ): Response
    {
        $params = $request->getContent();
        $obj = json_decode($params);

        $user = $entityManager->getRepository(User::class)->findOneBy(["id" => $obj->id]);

        $user->setNom($obj->nom);
        $user->setPrenom($obj->prenom);
        $user->setEmail($obj->mail);
        $user->setPassword(
            $userPasswordHasher->hashPassword(
                    $user,
                    $obj->password
                )
            );

        $entityManager->persist($user);
        $entityManager->flush();

        dd($user);

    }
}
