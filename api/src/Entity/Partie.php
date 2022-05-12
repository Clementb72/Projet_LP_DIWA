<?php

namespace App\Entity;

use App\Repository\PartieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\ManyToOne(targetEntity=TypePartie::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $type_partie;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date_partie;

    /**
     * @ORM\Column(type="json")
     */
    private $reponses = [];

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="json")
     */
    private $debriefing = [];

    public function __construct()
    {
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getTypePartie(): TypePartie
    {
        return $this->type_partie;
    }

    public function setTypePartie(TypePartie $type_partie): self
    {
        $this->type_partie = $type_partie;

        return $this;
    }

    public function getDatePartie(): \DateTimeInterface
    {
        return $this->date_partie;
    }

    public function setDatePartie(\DateTimeInterface $date_partie): self
    {
        $this->date_partie = $date_partie;

        return $this;
    }

    public function getReponses(): array
    {
        return $this->reponses;
    }

    public function setReponses(array $reponses): self
    {
        $this->reponses = $reponses;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getDebriefing(): ?array
    {
        return $this->debriefing;
    }

    public function setDebriefing(array $debriefing): self
    {
        $this->debriefing = $debriefing;

        return $this;
    }
}
