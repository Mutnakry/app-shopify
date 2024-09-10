-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2024 at 05:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_shopify`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `names` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `userNote` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `userUpdate` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `names`, `image`, `userNote`, `created_at`, `updated_at`, `deleted_at`, `userUpdate`) VALUES
(1, 'Game', '1725502165905_Clash of Clans.jpg', 'sale', '2024-09-05 02:09:25', '2024-09-05 02:09:25', NULL, ''),
(2, 'Drink', '1725502266988_drinks.png', 'sale', '2024-09-05 02:11:07', '2024-09-05 02:11:07', NULL, ''),
(3, 'Mascara', '1725504757522_mascara.jpg', 'sale', '2024-09-05 02:13:39', '2024-09-05 02:52:37', NULL, 'admin'),
(4, 'Fuit', '1725504716827_fuit.jpg', 'sale', '2024-09-05 02:14:01', '2024-09-05 02:51:56', NULL, 'admin'),
(5, 'Football', '1725502748991_unnamed.png', 'admin', '2024-09-05 02:19:09', '2024-09-05 02:19:09', NULL, NULL),
(7, 'Claf Of clan', '1725508033562_Anger.jpg', 'admin', '2024-09-05 03:47:13', '2024-09-05 03:47:13', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `names` varchar(255) NOT NULL,
  `expice` date DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `original_price` decimal(10,2) DEFAULT NULL,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `profit` decimal(10,2) DEFAULT NULL,
  `discount` decimal(5,2) DEFAULT 0.00,
  `status` tinyint(1) DEFAULT 1,
  `image` varchar(255) DEFAULT NULL,
  `userNote` text DEFAULT NULL,
  `userUpdate` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `discription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `names`, `expice`, `category_id`, `qty`, `original_price`, `sale_price`, `profit`, `discount`, `status`, `image`, `userNote`, `userUpdate`, `created_at`, `updated_at`, `discription`) VALUES
(1, 'Claf Of clan', '2024-08-01', 1, 2, 50.00, 80.00, 30.00, 25.00, 1, '1725508580606_Anger.jpg', 'admin', NULL, '2024-09-05 03:56:20', '2024-09-05 08:09:02', NULL),
(2, 'Mobail', '2024-08-01', 1, 3, 500.00, 1000.00, 500.00, 50.00, 1, '1725508676138_mobile.jpg', 'admin', NULL, '2024-09-05 03:57:56', '2024-09-05 07:38:49', 'ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម'),
(3, 'Mobail', '2024-08-01', 2, 4, 500.00, 1000.00, 500.00, 50.00, 1, '1725509130115_drinks.png', 'admin', 'admin', '2024-09-05 03:58:23', '2024-09-05 08:09:06', ' អង្គរមៀល'),
(5, 'Mobail', '2024-08-01', 1, 5, 500.00, 1000.00, 500.00, 0.00, 1, '1725508676138_mobile.jpg', 'admin', NULL, '2024-09-05 03:57:56', '2024-09-05 08:09:10', ' អង្គរមៀល');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `names` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `rol` enum('manager','admin','sale','user') DEFAULT 'user',
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `delete_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `names`, `phone`, `pass`, `rol`, `create_at`, `update_at`, `delete_at`) VALUES
(1, 'nakry', '0965752080', '$2a$08$ohwicOPTxihrbsrB9ZSCue9Ic/Jt0aOu1tnlH2U6mwm4IWg6V/HX6', 'user', '2024-09-04 06:42:36', '2024-09-04 07:14:30', NULL),
(3, 'nakry', '0897346234', '$2a$08$.5zZkj7AI6nbGw/MTzS1f.wT5faS0RSwzbtF2oyDgWbXTfLsR3bei', 'user', '2024-09-04 08:03:01', '2024-09-04 08:03:01', NULL),
(4, 'admin', '096', '$2a$08$8DtaUog4Re/X7XshEJqYI.uY51qAGu5sv/gSXlY3gjkjyIQAFHtQi', 'user', '2024-09-04 08:20:35', '2024-09-04 08:20:35', NULL),
(5, '123', '0987654321', '$2a$08$6925t94vhmSuY2IC2UzPBOjJ7LujprFzOz8TGzYb0VWCeP88rpIja', 'user', '2024-09-04 09:13:20', '2024-09-04 09:13:20', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
