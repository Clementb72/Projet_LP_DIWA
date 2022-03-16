<?php

namespace App\Repository;

use App\Entity\User;
use App\Services\Interfaces\UserRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface, UserRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }
    
    /**
     * Sauvegarde user
     *
     * @param  User $user
     * @return void
     */
    public function save(User $user) {
        $this->_em->persist($user);
        $this->_em->flush();
    }
    
    /**
     * Sauvegarde du token
     *
     * @param  User $user
     * @param  string $token
     * @return void
     */
    public function setUserToken(User $user, string $token) {
        try {
            $user->setToken($token);
            $this->_em->persist($user);
            $this->_em->flush();
            return $token;
        } catch (\Exception $e) {
            throw $e;
        }
    }

}
