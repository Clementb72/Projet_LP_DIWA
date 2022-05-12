<?php

namespace App\Services\Mailer;

use App\Entity\Partie;

use App\Services\Interfaces\Services\MailerServiceInterface;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

class MailerService implements MailerServiceInterface {

    private $mailer;

    public function __construct(MailerInterface $mailer) {
        $this->mailer = $mailer;
    }

    public function sendEmail(string $to, string $subject, Partie $partie)
    {

        $email = (new TemplatedEmail())
            ->from('noreply.wys.app@gmail.com')
            ->to('gregoire@winyourstar.com')
            ->cc($to)
            // ->bcc('noreply.wys.app@gmail.com')
            // ->replyTo('noreply.wys.app@gmail.com')
            // ->addReplyTo('gregoire@winyourstar.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject($subject)
            ->htmlTemplate('emails/newPartie.html.twig')
            ->context([
                'partie' => $partie
            ]);

        $this->mailer->send($email);

    }

}