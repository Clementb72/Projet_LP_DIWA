<?php

namespace App\Repository;

use App\Entity\TypePartie;
use App\Services\Interfaces\TypePartieRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypePartie|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypePartie|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypePartie[]    findAll()
 * @method TypePartie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypePartieRepository extends ServiceEntityRepository implements TypePartieRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypePartie::class);
    }

    // /**
    //  * @return TypePartie[] Returns an array of TypePartie objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TypePartie
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
