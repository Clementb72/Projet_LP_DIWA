-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: lpdiwa
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB-1:10.4.21+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `migration_versions`
--

DROP TABLE IF EXISTS `migration_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migration_versions`
--

LOCK TABLES `migration_versions` WRITE;
/*!40000 ALTER TABLE `migration_versions` DISABLE KEYS */;
INSERT INTO `migration_versions` VALUES ('20201031052355','2021-10-28 18:41:59');
/*!40000 ALTER TABLE `migration_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todolist_entry`
--

DROP TABLE IF EXISTS `todolist_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `todolist_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `due_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todolist_entry`
--

LOCK TABLES `todolist_entry` WRITE;
/*!40000 ALTER TABLE `todolist_entry` DISABLE KEYS */;
INSERT INTO `todolist_entry` VALUES (1,'Donec2 a venenatis sem. Mauris sed tortor in lacus mattis.','2020-12-20'),(2,'Proin vel porta metus. Phasellus vitae suscipit sapien. Aenean sed.','2020-12-07'),(3,'Duis molestie tortor turpis, ac accumsan elit hendrerit maximus. Vestibulum.','2021-01-06'),(4,'In consequat, felis ut efficitur facilisis, ligula nisi posuere augue.','2021-01-14'),(5,'Praesent sem magna, mollis vel erat nec, condimentum dapibus enim.','2020-11-25'),(6,'Duis suscipit dolor risus, a elementum lacus varius eu. Maecenas.','2020-12-08'),(7,'Ut congue dui nec nibh dapibus aliquam. Morbi sit amet.','2021-01-30'),(8,'Nunc sit amet odio tempor, consequat tellus a, dignissim lorem.','2021-01-29'),(9,'Nulla accumsan massa diam, at posuere magna convallis sit amet.','2020-10-15'),(10,'Etiam vulputate eleifend mi, sed malesuada elit laoreet eget. Proin.','2020-12-07'),(11,'Phasellus condimentum dolor libero, eget porttitor massa pulvinar eget. Nunc.','2020-10-30'),(12,'Aenean a ante lacinia, lacinia tortor vitae, ultrices nunc. Nullam.','2020-10-12'),(13,'Aliquam sed dui neque. Quisque quis bibendum erat, vel interdum.','2021-01-09'),(14,'Fusce et elit metus. Vestibulum sit amet ipsum vestibulum, efficitur.','2020-12-21'),(15,'Integer malesuada porta mattis. Proin ut sem facilisis, tempus ante.','2020-10-03'),(16,'Cras finibus, ipsum at tincidunt vestibulum, mauris turpis faucibus massa.','2020-10-26'),(17,'Etiam a augue volutpat, rhoncus velit faucibus, pellentesque nisi. Aliquam.','2020-10-05'),(18,'Maecenas dictum tortor vitae cursus maximus. Curabitur ut odio condimentum.','2020-11-27'),(19,'Sed cursus lacus lacus, at fermentum diam facilisis tempus. Proin.','2021-01-05'),(20,'Vestibulum dictum est quam, nec maximus massa lacinia ut. Maecenas.','2021-01-07');
/*!40000 ALTER TABLE `todolist_entry` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-28 18:43:24
