<?php

namespace App\Entity;

use App\Repository\TypePartieRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TypePartieRepository::class)
 */
class TypePartie
{

    const MODE_SOLO_CONQUETE = "SC";
    const MODE_SOLO_IMMERSION = "SI";
    const MODE_SOLO_RETROACTION = "SR";
    const MODE_MULTI_CONQUETE = "MC";
    const MODE_MULTI_IMMERSION = "MI";
    const MODE_MULTI_RETROACTION = "MR";

    const TYPES_PARTIE = array(self::MODE_SOLO_CONQUETE, self::MODE_SOLO_IMMERSION,self::MODE_SOLO_RETROACTION, self::MODE_MULTI_CONQUETE, self::MODE_MULTI_IMMERSION, self::MODE_MULTI_RETROACTION);
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $acro;

    public function getId(): int
    {
        return $this->id;
    }

    public function getMode(): string
    {
        return $this->mode;
    }

    public function setMode(string $mode): self
    {
        $this->mode = $mode;

        return $this;
    }

    public function getAcro(): string
    {
        return $this->acro;
    }

    public function setAcro(string $acro): self
    {
        $this->acro = $acro;

        return $this;
    }
}
