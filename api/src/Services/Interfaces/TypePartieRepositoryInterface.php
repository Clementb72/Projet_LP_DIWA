<?php

namespace App\Services\Interfaces;

use App\Entity\TypePartie;

interface TypePartieRepositoryInterface {
    
    /**
     * Récupère tout les types partie
     *
     * @return Array<TypePartie>
     */
    public function findAll();
    
}