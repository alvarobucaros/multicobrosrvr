-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: multicobro
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anticipos`
--

DROP TABLE IF EXISTS `anticipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anticipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `an_idEmpresa` int(11) DEFAULT NULL,
  `an_idUsuario` int(11) DEFAULT NULL,
  `an_Fecha` date DEFAULT NULL,
  `an_Valor` decimal(12,2) DEFAULT NULL,
  `an_Saldo` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anticipos`
--

LOCK TABLES `anticipos` WRITE;
/*!40000 ALTER TABLE `anticipos` DISABLE KEYS */;
/*!40000 ALTER TABLE `anticipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cobros`
--

DROP TABLE IF EXISTS `cobros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cobros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cb_idEmpresa` int(11) DEFAULT NULL,
  `cb_idUsuario` int(11) DEFAULT NULL,
  `cb_idConcepto` int(11) DEFAULT NULL,
  `cb_periodo` char(6) DEFAULT NULL,
  `cb_cuota` decimal(12,2) DEFAULT NULL,
  `cb_saldo` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cobros`
--

LOCK TABLES `cobros` WRITE;
/*!40000 ALTER TABLE `cobros` DISABLE KEYS */;
/*!40000 ALTER TABLE `cobros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conceptos`
--

DROP TABLE IF EXISTS `conceptos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conceptos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cp_idEmpresa` int(11) DEFAULT NULL,
  `cp_titulo` varchar(45) DEFAULT NULL,
  `cp_descripcion` text,
  `cp_periodoDesde` char(6) DEFAULT NULL,
  `cp_periodoHasta` char(6) DEFAULT NULL,
  `cp_periodoActual` char(6) DEFAULT NULL,
  `cp_valorCobro` decimal(12,2) DEFAULT NULL,
  `cp_estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conceptos`
--

LOCK TABLES `conceptos` WRITE;
/*!40000 ALTER TABLE `conceptos` DISABLE KEYS */;
INSERT INTO `conceptos` VALUES (1,1,'CONCEPT 1','Concepto numero uno','202101','202112','202101',5000.00,'A'),(2,1,'CONCEPT 2','Concepto numero DOS','202101','202112','202101',5000.00,'A'),(3,1,'CONCEPT 3','Concepto numero tRES','202101','202112','202101',5000.00,'A'),(4,1,'CASO','Un Caso fuera de serie','202101','202112','202101',5000.00,'A'),(5,1,'QUE','cual que','202101','202112','202101',5000.00,'A'),(6,1,'CONCEPT','This is a mew form concept','202101','202112','202101',5000.00,'A'),(7,1,'ARRIENDOS','arriendos por contratos de carretara','202101','202112','202101',5000.00,'A'),(8,1,'CALIBRACIONES','Calibración de los estados de cambio de la instituciónalidad','202101','202112','202101',5000.00,'A'),(9,1,'AJUSTES','ajuates al pesito','202101','202101','202101',8000.00,'A'),(10,1,'ZAHRA','Esto es moda','202101','202112','202101',8000.00,'I');
/*!40000 ALTER TABLE `conceptos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `em_nombre` varchar(100) DEFAULT NULL,
  `em_direccion` varchar(100) DEFAULT NULL,
  `em_localidad` varchar(60) DEFAULT NULL,
  `em_barrio` varchar(60) DEFAULT NULL,
  `em_ciudad` varchar(45) DEFAULT NULL,
  `em_nit` varchar(20) DEFAULT NULL,
  `em_telefono` varchar(60) DEFAULT NULL,
  `em_email` varchar(100) DEFAULT NULL,
  `em_observaciones` varchar(255) DEFAULT NULL,
  `em_autentica` varchar(1) DEFAULT NULL,
  `em_consecRcaja` int(11) DEFAULT NULL,
  `em_consecEgreso` int(11) DEFAULT NULL,
  `em_estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'EMPRESA DE PRUEBAS','CR 54 55 44','TEUSA','PABLO','BOGOTA','9800','317414','alvaro.oycsoft@gmail.com','No Hay','M',0,0,'A');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingregasto`
--

DROP TABLE IF EXISTS `ingregasto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingregasto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ig_idEmpresa` int(11) DEFAULT NULL,
  `ig_fecha` date DEFAULT NULL,
  `ig_tipo` char(1) DEFAULT NULL,
  `ig_detalle` varchar(120) DEFAULT NULL,
  `ig_numero` varchar(10) DEFAULT NULL,
  `ig_documento` varchar(20) DEFAULT NULL,
  `ig_idUsuario` int(11) DEFAULT NULL,
  `ig_valor` decimal(12,2) DEFAULT NULL,
  `ig_saldo` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingregasto`
--

LOCK TABLES `ingregasto` WRITE;
/*!40000 ALTER TABLE `ingregasto` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingregasto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otro`
--

DROP TABLE IF EXISTS `otro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `otroCodigo` varchar(45) DEFAULT NULL,
  `otroNombre` varchar(45) DEFAULT NULL,
  `otroFecha` date DEFAULT NULL,
  `otroTexto` text,
  `otroEstado` char(1) DEFAULT NULL,
  `otroPassword` varchar(45) DEFAULT NULL,
  `otroSelectF` char(1) DEFAULT NULL,
  `otroSelectV` char(1) DEFAULT NULL,
  `otroEmail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otro`
--

LOCK TABLES `otro` WRITE;
/*!40000 ALTER TABLE `otro` DISABLE KEYS */;
INSERT INTO `otro` VALUES (24,'110551','HISTORIAS SIX','2021-03-05','Detalles','A','www','T','9','alvaro.oycsoft@gmail.com'),(2,'Z2','AJUSTES A LA Z','2021-02-12','Textos','A','123','T','6','aoc@com'),(3,'H4','HABUAS CORPUS 4','2021-02-12','Textos','A','123','T','4','aoc@com'),(4,'G6','GATAS DE SEIS','2021-02-12','Textos','A','123','T','2','aoc@com'),(5,'J6','JUGETES DE SIX','2021-02-12','Textos','A','123','T','1','aoc@com'),(6,'B1','VITAMINA B','2021-02-12','Textos','A','123','T','3','aoc@com'),(8,'D4','ALMACEN D','2021-02-12','Textos','A','123','T','4','aoc@com'),(9,'H6','HISTORIAS SIX','2021-02-12','Textos','A','123','M','2','aoc@com'),(10,'P9','PARTE NOVENA','2021-02-12','Textos','A','123','T','1','aoc@com'),(11,'S7','SOTANO SEPTIMO','2021-02-12','Textos','A','123','M','3','aoc@com'),(12,'U0','UNO EN CERO','2021-02-12','Textos','A','123','T','5','aoc@com'),(13,'C7','CAJA MANUAL','2021-02-12','Textos','A','123','M','7','aoc@com'),(16,'V7','Perfumeria','2021-02-12','Detalles','A','123','M','3','alvaro.oycsoft@gmail.com'),(17,'W5','Who Five','1987-12-12','delfina','A','345','C','5','alvaro.oycsoft@gmail.com'),(23,'110551','HISTORIAS SIX','2021-03-05','Detalles','A','www','T','9','alvaro.oycsoft@gmail.com'),(25,'110','UNO EN CERO','2021-03-25','delfina','A','rrr','T','9','alvaro.oycsoft@gmail.com'),(18,'L3','ALMACEN DE 3','2015-12-12','Detalles','A','1234','T','2','alvaro.oycsoft@gmail.com'),(26,'CAN','Cancilones de melodías','2021-03-24','detallisimos','A','qwe','C','7','oycsoft@gmail.com');
/*!40000 ALTER TABLE `otro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prueba`
--

DROP TABLE IF EXISTS `prueba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prueba` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pr_codigo` varchar(12) DEFAULT NULL,
  `pr_detalle` varchar(100) DEFAULT NULL,
  `pr_fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prueba`
--

LOCK TABLES `prueba` WRITE;
/*!40000 ALTER TABLE `prueba` DISABLE KEYS */;
INSERT INTO `prueba` VALUES (1,'A1','Detalle del A1','2020-03-04'),(3,'B1','Detalle de la B1','2020-05-04'),(4,'B1','Detalle de la B1','2020-12-04'),(5,'B2','Detalle de la B1','2020-05-04'),(6,'B3','Detalle de la B1','2020-07-04'),(7,'B4','Detalle de la B1','2020-05-24'),(8,'B5','Detalle de la B1','2020-05-12'),(9,'c1','Detalle de la B1','2020-05-04'),(10,'c2','Detalle de la B1','2020-05-04'),(11,'c3','Detalle de la B1','2020-05-04'),(12,'c4','Detalle de la B1','2020-05-04'),(13,'c5','Detalle de la B1','2020-05-04'),(14,'d1','Detalle de la B1','2020-05-04'),(15,'t2','Detalle de la B1','2020-05-04'),(16,'t3','Detalle de la B1','2020-05-04'),(17,'cf4','Detalle de la B1','2020-05-04'),(18,'cd5','Detalle de la B1','2020-05-04');
/*!40000 ALTER TABLE `prueba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `us_idEmpresa` int(11) DEFAULT NULL,
  `us_nombre` varchar(100) DEFAULT NULL,
  `us_direccion` varchar(100) DEFAULT NULL,
  `us_localidad` varchar(60) DEFAULT NULL,
  `us_barrio` varchar(60) DEFAULT NULL,
  `us_ciudad` varchar(45) DEFAULT NULL,
  `us_email` varchar(100) DEFAULT NULL,
  `us_tipoDoc` char(1) DEFAULT NULL,
  `us_nroDoc` varchar(20) DEFAULT NULL,
  `us_telefono` varchar(100) DEFAULT NULL,
  `us_clave` varchar(100) DEFAULT NULL,
  `us_estado` char(1) DEFAULT NULL,
  `us_nivel` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `us_idEmpresa` (`us_idEmpresa`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`us_idEmpresa`) REFERENCES `empresas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'ALVARO','CRA 44','TESY','CHICO','CHIA','admin@com','C','1234','311','202cb962ac59075b964b07152d234b70','A','A'),(2,1,'SUPERVISAR','cra 6','chapinero','Nogal','Bucaramanga','super@com','C','988','3174142133','202cb962ac59075b964b07152d234b70','A','S'),(3,1,'USUARIO: APTO 412','Cra 44','no hay','No hay','Girardot','user@com','C','456','456','202cb962ac59075b964b07152d234b70','A','C'),(5,1,'USUARIO EXTERNO','Cll 76 45-33','Cuba','Cuba','San Fco','otro@com','P','456','312','1c6bcd4e2b7bd75973d52207f63dbaa2','A','C'),(6,1,'USUARIO CONSULTOR','Avenida Bolivar 45.4','no','no','Soata','oyc@com','C','676','9888','914ed85453dc5cd781250b9934de4518','A','C');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-08 19:04:48
