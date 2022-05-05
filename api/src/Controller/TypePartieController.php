<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\TypePartie;
use App\Services\TypePartieService;

class TypePartieController extends AbstractController
{
    /**
     * @Route("/api/typesPartie", name="api_typesPartie", methods="GET")
     */
    public function index(TypePartieService $typePartieService): Response
    {

        $typesPartie = $typePartieService->getAll();

        return $this->json($typesPartie);
        
    }
}
