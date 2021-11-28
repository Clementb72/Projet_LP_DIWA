<?php

namespace App\Entity;

use App\Repository\PartieRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PartieRepository::class)
 */
class Partie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typePartie;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datePartie;

    /**
     * @ORM\Column(type="array")
     */
    private $users = [];

    /**
     * @ORM\Column(type="json")
     */
    private $reponses = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypePartie(): ?string
    {
        return $this->typePartie;
    }

    public function setTypePartie(string $typePartie): self
    {
        $this->typePartie = $typePartie;

        return $this;
    }

    public function getDatePartie(): ?\DateTimeInterface
    {
        return $this->datePartie;
    }

    public function setDatePartie(\DateTimeInterface $datePartie): self
    {
        $this->datePartie = $datePartie;

        return $this;
    }

    public function getUsers(): ?array
    {
        return $this->users;
    }

    public function setUsers(array $users): self
    {
        $this->users = $users;

        return $this;
    }

    public function getReponses(): ?array
    {
        return $this->reponses;
    }

    public function setReponses(array $reponses): self
    {
        $this->reponses = $reponses;

        return $this;
    }
}
