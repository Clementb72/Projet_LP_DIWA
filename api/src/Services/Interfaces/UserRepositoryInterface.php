<?php

namespace App\Services\Interfaces;

use App\Entity\User;

interface UserRepositoryInterface {
    
    /**
     * Sauvegarde user
     *
     * @param  User $user
     * @return void
     */
    public function save(User $user);
    
    /**
     * Sauvegarde du token
     *
     * @param  User $user
     * @param  string $token
     * @return void
     */
    public function setUserToken(User $user, string $token);
    
}