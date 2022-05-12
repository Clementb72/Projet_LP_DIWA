<?php

namespace App\Services\Interfaces\Services;

use App\Entity\Partie;

interface MailerServiceInterface {
        
    /**
     * Envoie un mail
     *
     * @param  string $to
     * @param  string $subject
     * @param  Partie $partie
     * @return Response
     */
    public function sendEmail(string $to, string $subject, Partie $partie);
    
}