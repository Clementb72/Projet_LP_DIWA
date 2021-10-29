# Structure de projet Symfony - React sur Docker

---

*Auteur : Rémi Venant, <[remi.venant@univ-lemans.fr](mailto://remi.venant@univ-lemans.fr)>*  
*Version : 1.0*

---

Ce projet dépot une structure de base pour des projets de développement d'application web reponsant sur Symfony coté *backend* et React/MobX coté *frontend*, et reposant sur des bases de données SQL et NoSQL orientées Document.

Ce dépôt propose :
- la structuration de l'arborescence de fichiers ;
- des piles de conteneurs Docker pour fournir les environnements de développement et de pré-production/production ;
- la structure et l'ensemble des fichiers de configuration nécessaires à l'exploitation des piles Docker
- une documentation
- un outil (script shell) pour simplifier la manipulation des piles Docker
- une application de démonstration exploitant l'ensemble des composants.

2 branches sont proposées dans ce dépôt :
- **main** : de base cette branche est vide, mais à terme elle contiendra le code de l'incrément de votre WebApp à la fin de chaque sprint testable par le commanditaire.
- **demo** : contient une Web application de démonstration.

## Documentation

La documentation est consultable ici : [doc/documentation_fr.pdf](./doc/documentation_fr.pdf)

## Tester rapidement l'application de démo

- vérifier que Docker soit bien installé et lancé sur votre machine
- vérifier que vous ayez les droits de manipuler docker (ex.: `docker ps`)
- vérifier qu'aucun programme sur votre machine ne soit déjà à l'écoute des ports 8080 et 3000
- clonez le dépôt (`git clone ...`)
- positionnez-vous dans le dossier du dépôt (`cd ...`)
- rapatriez la branche "démo" du dépôt (`git checkout origin/demo`)
- si vous êtes sur un poste de l'IUT de Laval, décommentez les lignes 80 et 81 du fichier ./docker/docker-compose-prod-lemansproxy.yml
    ports:
      - 80:80
- sinon décommentez les lignes 75 et 76 du fichier ./docker/docker-compose-prod.yml
    ports:
      - 80:80
- positionnez-vous dans le dossier script : `cd ./script`
- lancez l'application de démo en mode production (`./dcTool prod up` ou `./dcTool prod -lmp up` depuis un poste de l'IUT de Laval)
- attendez que l'ensemble des conteneurs soient correctement lancés. Normalement, lorsque l'application sera prête, la commande `./dcTool prod ps` devrez vous indiquer que les conteneurs http, mongodb, mysqldb, symfony sont lancés (*Up*) et que le conteneur npm a terminé avec un code de sortie 0 (*Exit 0*). Le premier lancement est généralement long (rapatriement des images, installation des dépendances des application *backend* et *frontend*, build de l'application *frontend*)
- recommentez les lignes qui ont été décommentées
- une fois l'ensemble des conteneurs lancés, vous devriez pouvoir tester l'application depuis votre navigateur à l'adresse [http://localhost:80](http://localhost:80)
- arrêtez la pile (`./dcTool prod down -v` ou `./dcTool prod -lmp down -v` depuis un poste de l'IUT de Laval)

## Ajout de scripts bash

Vous pouvez ajouter vos scripts bash personnels dans le dossier ./script pour vos besoins de développement propre. Par contre il faut bien penser à attribuer les droits corrects pour l'autorisation de l'exécution du script avec la commande : `chmod u+x ./script/votre_script_perso.sh`. 