<h1 align="center">
    Documentation du Projet WYS APP
</h1>
<p align="center">
    Ce projet annuel de la licence professionnel Développeur et Intégrateur de Web Applications de l'IUT de LAVAL a pour objectif la dématérialisation d'un jeu physique (Serious Game) en version numérique (Web App / POC - Proof Of Concept)<br><br>
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img alt="Webpack" src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white">
    <img alt="JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img alt="Sass" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
    <img alt="React Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
    <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white">
    <img alt="Symfony" src="https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=Symfony&logoColor=white">
    <img alt="Node" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img alt="MariaDB" src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white">
    <img alt="MySQL" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
    <img alt="Nginx" src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
    <img alt="Alpine" src="https://img.shields.io/badge/Alpine_Linux-0D597F?style=for-the-badge&logo=alpine-linux&logoColor=white">
    <img alt="Docker" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">
    <img alt="Bash" src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white">
</p>

## Prérequis
- Docker
- Docker Compose

## Installation
Script pour démarrer la pile docker
```sh
./scripts/noProxy.sh
```

## Features
- Déploiement d'une base de données MariaDB (Version 10.7)
- Déploiement d'un serveur Node JS (Version 17)
- Déploiement d'un serveur Nginx (Version 1.21.6-alpine)
- Déploiement d'un container Symfony (Image Docker : fguntz/symfony:2.0)
- Déploiement d'une interface PhpMyAdmin (Version 5.1)
- Déploiement d'un catcheur de mail (Image Docker : maildev/maildev)

## Features API
**GET** :
```sh
/api/parties # Retourne toutes les parties stockées en base données
```
```sh
/api/typesPartie # Retourne tous les types partie stockés en base données
```

**POST** :
```sh
/api/login # Route permettant de se connecter à un compte utilisateur
```
```sh
/api/partie # Route permettant de sauvegarder une partie
```
```sh
/api/updateProfil # Route permettant de mettre à jour les données d'un compte utilisateur
```
```sh
/api/register # Route permettant de créer un compte utilisateur
```

## Accès
Route d'accès de l'API
```sh
127.0.0.1:8080
```
Route d'accès de l'application
```sh
127.0.0.1:3000
```
Route d'accès du catcheur de mail
```sh
127.0.0.1:1080
```
Route d'accès à l'interface phpmyadmin
```sh
127.0.0.1:8889
```
