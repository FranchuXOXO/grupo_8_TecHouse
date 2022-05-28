-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: 127.0.0.1    Database: techouse
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'administrator'),(2,'client');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_product`
--

DROP TABLE IF EXISTS `client_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `client_product` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_client` int(15) NOT NULL,
  `id_product` int(15) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id_product`),
  KEY `id_cliente` (`id_client`),
  CONSTRAINT `client_product_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`),
  CONSTRAINT `client_product_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_product`
--

LOCK TABLES `client_product` WRITE;
/*!40000 ALTER TABLE `client_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clients` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_image` varchar(150) DEFAULT NULL,
  `id_category` int(15) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria` (`id_category`),
  CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (2,'Pedro','Gomez','pedrogomez@gmail.com','$2a$10$34zE4wlBz5AeCASOgGwxz.YXQ/tjOPCFZOfJZxm0qEDFlkmPWdKRO','image-1646597341265.jpeg',1),(3,'Juan','Gonzales','Juangon@email.com','$2a$10$KIp0NufDF8Rq3iGC8shM8ugQq8hoAKMSDUYXurm2K4c/q9hEA1YPG','profile_image-1650495216995.jpg',1),(4,'Francisco ','Salanova ','fsalanova.16@gmail.com','$2a$10$JWZ593/c6UVr06Y/g936t.RdNDTouNYeh3u3Yp1Y4VSSb9c/yVz1a','profile_image-1650497402035.jpg',1),(5,'Juan','Perez','jperez@dh.com','$2a$10$p6FHVpqXsILNGr5JYmAno.Zht4KJ4OE/afKqcjSNbFNkkeRiKnd0C','profile_image-1651702876225.jpg',2),(6,'Jorge','Lopez','jolopez@dh.com','$2a$10$y8u43wGD3V1orW0nTM3QiefyM.zd4lFaRB.d8ZRhebnBhTqceQ99O','profile_image-1651703295024.jpg',2),(7,'Victor','Fernandez','vfernandez@dh.com','$2a$10$tNbrQL4dAjdj5daIYnVTd.S0cT9JQI5qzqHtM59zoo4iaRyyKSpoW','profile_image-1651703567523.jpg',2);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colors` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Gris'),(2,'Blanco'),(3,'Negro');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compatibility`
--

DROP TABLE IF EXISTS `compatibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `compatibility` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `device_name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibility`
--

LOCK TABLES `compatibility` WRITE;
/*!40000 ALTER TABLE `compatibility` DISABLE KEYS */;
INSERT INTO `compatibility` VALUES (1,'Amazon Alexa'),(2,'Apple Siri'),(3,'Phillips');
/*!40000 ALTER TABLE `compatibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(200) NOT NULL,
  `product_image` varchar(150) NOT NULL,
  `id_compatibility` int(15) NOT NULL,
  `id_color` int(50) NOT NULL,
  `product_price` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_ibfk_1` (`id_compatibility`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_compatibility`) REFERENCES `compatibility` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (6,'garmin','Alexa accesory','product_image-1649629205471.jpg',1,1,20000),(7,'Philips Hue Lámpara Individual WCA 9W A60 E27','Luz blanca y de color, Control instantáneo mediante Bluetooth, Control mediante aplicación o voz, Agrega el Bridge Hue para desbloquear más funciones.','product_image-1651968734071.jpeg',1,1,2500),(8,'Philips HUE Lámpara Individual White 9.5W E27','Luz blanca suave, Control instantáneo mediante Bluetooth, Control mediante aplicación o voz, Agrega el Bridge Hue para desbloquear más funciones.','product_image-1651969039428.jpeg',1,3,2200),(9,'Philips Hue  Lámpara Individual W 5.2W GU10','Luz blanca suave, Control instantáneo mediante Bluetooth, Control mediante aplicación o voz, Agrega el Bridge Hue para desbloquear más funciones.','product_image-1651969442179.jpeg',1,1,1800);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sales` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_client` int(15) NOT NULL,
  `id_product` int(15) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_client` (`id_client`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`),
  CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (2,2,8),(3,2,6),(4,3,9),(5,3,9),(6,3,9);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 21:00:39
