<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\UserRepository;

class UserService {

    private $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function userConnexion(User $user) {

        $token = rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '='); // somehow create an API token for $user

        return $this->userRepository->setUserToken($user, $token);

    }

    public function getUser(int $id) {
        return $this->userRepository->findOneBy(['id' => $id]);
    }

}