<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Extra\TwigExtraBundle;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
            $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $this->redirectToRoute('parties');
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }


    #[Route('/api/register', name: 'api_register')]
    public function api_register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        try{
            $user = new User();
            
            $contenu = $request->getContent();
            $obj = json_decode($contenu); 
            $email = $obj->mail;
            $mdp = $userPasswordHasher->hashPassword(
                $user,
                $obj->password
            );
          
            $nom = $obj->nom;
            $prenom = $obj->prenom;

            $user->setEmail($email);
            $user->setPassword($mdp);
            $user->setPrenom($prenom);
            $user->setNom($nom);

            $entityManager->persist($user);
            $entityManager->flush();

            return new Response('OK', Response::HTTP_OK);

        }catch(Throwable $e) {
            return $this->json([
                'errorType' => get_class($e),
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
