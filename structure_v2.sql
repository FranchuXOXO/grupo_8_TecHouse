-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 07:40 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(15) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'administrator'),
(2, 'client');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(15) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_image` varchar(150) DEFAULT NULL,
  `id_category` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `first_name`, `last_name`, `email`, `password`, `profile_image`, `id_category`) VALUES
(2, 'Pedro', 'Gomez', 'pedrogomez@gmail.com', '$2a$10$34zE4wlBz5AeCASOgGwxz.YXQ/tjOPCFZOfJZxm0qEDFlkmPWdKRO', 'image-1646597341265.jpeg', 1),
(3, 'Juan', 'Gonzales', 'Juangon@email.com', '$2a$10$KIp0NufDF8Rq3iGC8shM8ugQq8hoAKMSDUYXurm2K4c/q9hEA1YPG', 'profile_image-1650495216995.jpg', 1),
(4, 'Francisco ', 'Salanova ', 'fsalanova.16@gmail.com', '$2a$10$JWZ593/c6UVr06Y/g936t.RdNDTouNYeh3u3Yp1Y4VSSb9c/yVz1a', 'profile_image-1650497402035.jpg', 1),
(5, 'Juan', 'Perez', 'jperez@dh.com', '$2a$10$p6FHVpqXsILNGr5JYmAno.Zht4KJ4OE/afKqcjSNbFNkkeRiKnd0C', 'profile_image-1651702876225.jpg', 2),
(6, 'Jorge', 'Lopez', 'jolopez@dh.com', '$2a$10$y8u43wGD3V1orW0nTM3QiefyM.zd4lFaRB.d8ZRhebnBhTqceQ99O', 'profile_image-1651703295024.jpg', 2),
(7, 'Victor', 'Fernandez', 'vfernandez@dh.com', '$2a$10$tNbrQL4dAjdj5daIYnVTd.S0cT9JQI5qzqHtM59zoo4iaRyyKSpoW', 'profile_image-1651703567523.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `client_product`
--

CREATE TABLE `client_product` (
  `id` int(15) NOT NULL,
  `id_client` int(15) NOT NULL,
  `id_product` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(15) NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `color`) VALUES
(1, 'Rojo'),
(2, 'Verde'),
(3, 'Azul');

-- --------------------------------------------------------

--
-- Table structure for table `compatibility`
--

CREATE TABLE `compatibility` (
  `id` int(15) NOT NULL,
  `device_name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `compatibility`
--

INSERT INTO `compatibility` (`id`, `device_name`) VALUES
(1, 'Alexa'),
(2, 'Siri'),
(3, 'Phillips');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(15) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(200) NOT NULL,
  `product_image` varchar(150) NOT NULL,
  `id_compatibility` int(15) NOT NULL,
  `id_color` int(50) NOT NULL,
  `product_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_description`, `product_image`, `id_compatibility`, `id_color`, `product_price`) VALUES
(6, 'garmin', 'Alexa accesory', 'product_image-1649629205471.jpg', 1, 1, 20000),
(7, 'Philips Hue Lámpara Individual WCA 9W A60 E27', 'Luz blanca y de color, Control instantáneo mediante Bluetooth, Control mediante aplicación o voz, Agrega el Bridge Hue para desbloquear más funciones.', 'product_image-1651968734071.jpeg', 1, 1, 2500),
(8, 'Philips HUE Lámpara Individual White 9.5W E27', 'Luz blanca suave, Control instantáneo mediante Bluetooth, Control mediante aplicación o voz, Agrega el Bridge Hue para desbloquear más funciones.', 'product_image-1651969039428.jpeg', 1, 3, 2200),
(9, 'Philips Hue  Lámpara Individual W 5.2W GU10', 'Luz blanca suave, Control instantáneo mediante Bluetooth, Control mediante aplicación o voz, Agrega el Bridge Hue para desbloquear más funciones.', 'product_image-1651969442179.jpeg', 1, 1, 1800);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(15) NOT NULL,
  `id_client` int(15) NOT NULL,
  `id_product` int(15) NOT NULL,
  `product_quantity` int(15) NOT NULL,
  `total_price` float NOT NULL,
  `id_cart` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_category`);

--
-- Indexes for table `client_product`
--
ALTER TABLE `client_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id_product`),
  ADD KEY `id_cliente` (`id_client`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `compatibility`
--
ALTER TABLE `compatibility`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`id_compatibility`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_product` (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `client_product`
--
ALTER TABLE `client_product`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `compatibility`
--
ALTER TABLE `compatibility`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`);

--
-- Constraints for table `client_product`
--
ALTER TABLE `client_product`
  ADD CONSTRAINT `client_product_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `client_product_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_compatibility`) REFERENCES `compatibility` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
