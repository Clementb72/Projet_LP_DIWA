<?php

namespace App\Services;

use App\Entity\TypePartie;
use App\Services\Interfaces\TypePartieRepositoryInterface;

class TypePartieService {

    private $typePartieRepository;

    public function __construct(TypePartieRepositoryInterface $typePartieRepository) {
        $this->typePartieRepository = $typePartieRepository;
    }

    public function getAll() {
        return $this->typePartieRepository->findAll();
    }

}