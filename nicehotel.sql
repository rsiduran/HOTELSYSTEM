-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2024 at 08:42 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nicehotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `product_name` text NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_picture` varchar(255) NOT NULL,
  `product_quantity` int(4) NOT NULL,
  `product_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `product_name`, `product_price`, `product_picture`, `product_quantity`, `product_description`) VALUES
(1, 'Pork Menudo', 140, '1.jpg', 1, ''),
(2, 'Ginataang gulay', 130, '1.jpg', 1, ''),
(3, 'Adobo', 150, '1.jpg', 1, ''),
(4, 'Beef bulalo ', 100, '1.jpg', 1, ''),
(5, 'Sinigang na baboy', 120, '1.jpg', 1, ''),
(6, 'Chicken tinola', 110, '1.jpg', 1, ''),
(7, 'Tortang talong', 120, '1.jpg', 1, ''),
(8, 'Chopsuey', 130, '1.jpg', 1, ''),
(9, 'Lumpiang Shanghai ', 100, '1.jpg', 1, ''),
(10, 'Kalderetang baka', 110, '1.jpg', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` text NOT NULL,
  `product_type` text NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_picture` varchar(255) NOT NULL,
  `product_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_type`, `product_price`, `product_picture`, `product_description`) VALUES
(1, 'Adobo', '', 150, '1.jpg', 'The resulting dish is savory, tangy, and often served with rice. It\'s a staple of Filipino cuisine and known for its rich flavor profile and versatility.'),
(2, 'Pork Menudo', '', 140, '1.jpg', 'The best menudo is one that simmers for hours. You want the pork to become tender and the rich liver flavor to melt into the sauce.'),
(3, 'Ginataang gulay', '', 130, '1.jpg', 'Ginataang gulay is a hearty vegetable stew with local veggies and a luscious coconut sauce. Traditional recipes feature kalabasa, sitaw, and okra, among other affordable and easy-to-find veggies.'),
(4, 'Sinigang na baboy', '', 120, '1.jpg', 'Sinigang na baboy is a traditional Filipino sour soup made with pork, typically pork belly or ribs, and various vegetables.'),
(5, 'Kalderetang baka', '', 110, '1.jpg', 'This beefy tomato stew is a labor of love. Many cooks swear that simmering the beef overnight is the secret to the most tender kalderetang baka.'),
(6, 'Lumpiang Shanghai ', '', 100, '1.jpg', 'umpiang Shanghai is a Filipino fried spring roll with minced pork and veggies. You can’t have a birthday party without these crunchy rolls and a bottle of sweet chili sauce.'),
(7, 'Chopsuey', '', 130, '1.jpg', 'Chopsuey is a Chinese-American veggie stir-fry that Filipinos embrace as their own. The dish\'s name literally translates to “odds and ends,” alluding to the use of whatever ingredients are readily available. '),
(8, 'Tortang talong', '', 120, '1.jpg', 'In 2022, food and travel guide Taste Atlas ranked tortang talong as “the best egg dish in the world.” This humble omelet only requires two main ingredients: grilled eggplant and scrambled eggs.'),
(9, 'Chicken tinola', '', 110, '1.jpg', 'Chicken tinola tastes like comfort, especially on cold, rainy days. It\'s chicken soup in its purest form, with its mild, gingery broth, generous cuts of chicken, and tender green papaya wedges.'),
(10, 'Beef bulalo ', '', 100, '1.jpg', 'Beef bulalo uses beef shank. While this cut can be intimidating to work with when you\'re a new cook, getting it right can be incredibly rewarding. The extra time and care you put into simmering the meat until tender will result in a rich, beefy stock.');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service_type` text NOT NULL,
  `service_price` int(11) NOT NULL,
  `service_description` text NOT NULL,
  `service_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_type`, `service_price`, `service_description`, `service_date`) VALUES
(1, 'service 1', 150, 'service description', '0000-00-00'),
(2, 'service 2', 140, 'service description', '0000-00-00'),
(3, 'service 3', 130, 'service description', '0000-00-00'),
(4, 'service 4', 120, 'service description', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
