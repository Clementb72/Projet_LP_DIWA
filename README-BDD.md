# DOCKER VS PROJET VS BDD

## Procédure conseillée

Pour vos projets, je vous conseille de travailler de la manière suivante : 

1. on lance la pile docker en mode dev
2. on exécute les fixtures avec la commande ./execute-mysql-mongo-fixtures.sh
3. on manipule la WebApp via le front -> les données en base de données sont modifiées
4. on exporte la base mariadB avec la commande ./exportMariadb.sh
5. on exporte la base mongodB avec la commande ./exportMongodB.sh
6. on commit les modifications
7. on met à jour le dépôt GitHub
8. on lance le déploiement du projet sur la pre-prod ou sur la prod, les bases vont être chargées avec les données modifiées des manips faites à l'étape 3

## en dev local 

Fonctionnez avec les fixtures pour peupler vos bdd (mysql et mongo)

dans le docker-compose-dev les deux lignes suivantes ont été commentées : 

- ../databasesInit/mysql/dev:/docker-entrypoint-initdb.d:ro
- ../databasesInit/mongo/dev:/docker-entrypoint-initdb.d:ro

Au démarrage des conteneurs, vos bdd sont donc vides. 

Pour créer la structure de la bdd mysql et la peupler et pour peupler la base mongo il faut exécuter la commande suivante : 

<pre><code>./execute-mysql-mongo-fixtures.sh</code></pre>

Vous pouvez partager un seul et même serveur bdd mysql ou mongo entre les différents postes de développement, en modifiant le fichier docker/environment/dev/symfony.env. Pour ce faire, il suffit de remplacer le nom des conteneurs mysqldb ou mongodb par l'adresse IP de la machine SALSA qui héberge votre BDD. 

Afin d'avoir une structure de BDD en lien avec les fonctionnalités ajoutées à la branche release, il est conseillé de finaliser la structure et le peuplement des BDD à partir de la branche release en mode développement. 

Si vous voulez garder l'état actuel de votre bdd pour les futures mises en preprod et prod, il faut lancer les commandes suivantes afin d'exporter vos bdd dans le dossier ./databasesInit/ de votre dépôt : 

<pre><code>./exportMariadb.sh</code>
<code>./exportMongodb.sh</code>
</pre>


## en preprod-prod ou prod

dans le docker-compose-prod les deux lignes suivantes ont été décommentées par rapport à l'environnement de dév : 

- ../databasesInit/mysql/dev:/docker-entrypoint-initdb.d:ro
- ../databasesInit/mongo/dev:/docker-entrypoint-initdb.d:ro

À la création des conteneurs de base de données, vous chargerez automatiquement les données qui ont été exportées après la phase de développement. 


