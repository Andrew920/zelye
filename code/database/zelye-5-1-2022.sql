-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Jan 05, 2023 at 04:26 PM
-- Server version: 10.10.2-MariaDB-1:10.10.2+maria~ubu2204
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zelye`
--
CREATE DATABASE IF NOT EXISTS `zelye` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `zelye`;

-- --------------------------------------------------------

--
-- Table structure for table `allergens`
--

DROP TABLE IF EXISTS `allergens`;
CREATE TABLE `allergens` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `col` int(11) DEFAULT 0,
  `place` int(11) DEFAULT 0,
  `rest_id` int(11) DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `size` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `col`, `place`, `rest_id`, `photo`, `size`) VALUES
(3, 'Predjedi', 0, 1, 1, 'predjedi.jpg', 1),
(4, 'Pijače', 0, 2, 1, 'pijace.jpg', 2),
(5, 'Pice', 0, 3, 1, 'pica.jpg', 1),
(6, 'Sladice', 0, 4, 1, 'sladice.jpg', 2),
(7, 'Glavne jedi', 1, 1, 1, 'glavne.jpg', 3),
(8, 'Prigrizki', 1, 2, 1, 'prigrizki.jpg', 2),
(9, 'Tople pijače', 1, 3, 1, 'tople_pijace.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `id_rest` int(11) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `postcode` int(5) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `id_rest`, `mobile`, `email`, `country`, `city`, `postcode`, `address`) VALUES
(1, 1, 15211515, 'info@cubo.si', 'Slovenija', 'Ljubljana', 1000, 'Šmartinska cesta 55');

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `price_unit` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `name`, `image`, `description`, `subcategory_id`, `price`, `price_unit`) VALUES
(1, 'Goveja juha', 'image-0.jpeg', 'Okusna goveja juha z zelenjavo in rezinami govejega mesa', 1, 3.5, 'EUR'),
(2, 'Korenčkova juha', 'image-1.jpeg', 'Sveža in osvežilna juha iz korenja z začimbami', 1, 4, 'EUR'),
(3, 'Paradižnikova juha', 'image-2.jpeg', 'Topla juha iz svežih paradižnikov z začimbami', 1, 3.75, 'EUR'),
(4, 'Lečina juha', 'image-3.jpeg', 'Okusna juha iz leče z zelenjavo in začimbami', 1, 3.5, 'EUR'),
(5, 'Cvetačna juha', 'image-4.jpeg', 'Sveža juha iz cvetače z začimbami in kremastim mlekom', 1, 3.2, 'EUR'),
(6, 'Milk shake', 'image-5.jpeg', 'Mlečni napitek', 2, 3.5, 'EUR'),
(7, 'Frape', 'image-6.jpeg', 'Borovnica, gozdni sadeži, banana', 2, 4.2, 'EUR'),
(8, 'Gosti sok s smetano ', 'image-7.jpeg', 'Gosti sok s smetano ', 2, 2.8, 'EUR'),
(9, 'Bananin napitek', 'image-8.jpeg', 'naravni pomarančni sok, banana, med ', 2, 3.4, 'EUR'),
(10, 'Limonada', 'image-9.jpeg', 'Naravno iztisnjena limonada', 2, 2.1, 'EUR'),
(11, 'Coca cola', 'image-10.jpeg', '3dl', 3, 2.2, 'EUR'),
(12, 'Fanta', 'image-11.jpeg', '3dl', 3, 2.2, 'EUR'),
(13, 'Sprite', 'image-12.jpeg', '3dl', 3, 2.2, 'EUR'),
(14, 'Bitter Lemon', 'image-13.jpeg', '3dl', 3, 2.2, 'EUR'),
(15, 'Orangina', 'image-14.jpeg', '3dl', 3, 2.3, 'EUR'),
(16, 'Tonic', 'image-15.jpeg', '3dl', 3, 2.2, 'EUR'),
(17, 'Cockta', 'image-16.jpeg', '3dl', 3, 2.2, 'EUR'),
(18, 'Sok v steklenički', 'image-17.jpeg', 'jagoda, pomaranča, breskev - 3 dl', 3, 2.2, 'EUR'),
(19, 'Radenska', 'image-18.jpeg', '3dl', 3, 1.6, 'EUR'),
(20, 'Oaza', 'image-19.jpeg', '5dl', 3, 1.6, 'EUR'),
(21, 'Negazirana voda', 'image-20.jpeg', '5dl', 3, 1.8, 'EUR'),
(22, 'Ledeni čaj', 'image-21.jpeg', '1dl', 3, 0.9, 'EUR'),
(23, 'Red Bull', 'image-22.jpeg', '0,33l', 3, 3.5, 'EUR'),
(24, 'Točeno pivo', 'image-23.jpeg', '0,5l', 4, 2.4, 'EUR'),
(25, 'Union', 'image-24.jpeg', '0,5l', 4, 3.1, 'EUR'),
(26, 'Zlatorog', 'image-25.jpeg', '0,5l', 4, 2.8, 'EUR'),
(27, 'Heineken', 'image-26.jpeg', '0,5l', 4, 3.3, 'EUR'),
(28, 'Radler', 'image-27.jpeg', '0,5l', 4, 2.8, 'EUR'),
(29, 'Brezalkoholno pivo', 'image-28.jpeg', '0,5l', 4, 3.5, 'EUR'),
(30, 'Somersby', 'image-29.jpeg', '0,5l', 5, 3.1, 'EUR'),
(31, 'Jabolčni TAT', 'image-30.jpeg', '0,33l', 5, 2.8, 'EUR'),
(32, 'Jack Daniels', 'image-31.jpeg', '0,03l', 6, 3.5, 'EUR'),
(33, 'Johnnie Walker red label', 'image-32.jpeg', '0,03l', 6, 3.5, 'EUR'),
(34, 'Jameson', 'image-33.jpeg', '0,33l', 6, 3.5, 'EUR'),
(35, 'Domači rum', 'image-34.jpeg', '0,03l', 6, 3.5, 'EUR'),
(36, 'Gin Beefeater', 'image-35.jpeg', '0,03l', 6, 3.5, 'EUR'),
(37, 'Grappa', 'image-36.jpeg', '0,33l', 6, 3.5, 'EUR'),
(38, 'Stock', 'image-37.jpeg', '0,03l', 6, 3.5, 'EUR'),
(39, 'Sadjevec', 'image-38.jpeg', '0,03l', 6, 3.5, 'EUR'),
(40, 'Travarica', 'image-39.jpeg', '0,33l', 6, 2.8, 'EUR'),
(41, 'Belo vino', 'image-40.jpeg', '0,1l', 7, 1.4, 'EUR'),
(42, 'Rdeče vino', 'image-41.jpeg', '0,1l', 7, 1.4, 'EUR'),
(43, 'Srebrna penina', 'image-42.jpeg', '0,1l', 7, 1.6, 'EUR'),
(44, 'Zlata penina', 'image-43.jpeg', '0,1l', 7, 1.6, 'EUR'),
(45, 'Prima classica', 'image-44.jpeg', 'Pica obložena z šunko, sirom in gobami', 8, 7.6, 'EUR'),
(46, 'Prima cremissima', 'image-45.jpeg', 'Pica obložena s šunko, sirom in gobovo kremo', 8, 7.9, 'EUR'),
(47, 'Prima fresca', 'image-46.jpeg', 'Pica obložena s sirom, panceto, rukolo, svežo papriko in šampinjoni', 8, 8.3, 'EUR'),
(48, 'Prima giavola', 'image-47.jpeg', 'Pica obložena s sirom, salamo, feferoni, papriko in šampinjoni', 8, 8.6, 'EUR'),
(49, 'Prima mexicana', 'image-48.jpeg', 'Pica obložena z mletim mesom, nacho sirom, rdečim fižolem, papriko in koruzo', 8, 8.6, 'EUR'),
(50, 'Con Salame', 'image-49.jpeg', 'Pica obložena s sirom, šunko, kuhanim pršutom, suho salamo in gobami', 8, 8.8, 'EUR'),
(51, 'Con Prosciutto', 'image-50.jpeg', 'Pica obložena s sirom, pršutom in gobami', 8, 8.6, 'EUR'),
(52, 'Caprese', 'image-51.jpeg', 'Pica obložena z rukolo, sirom, mozzarello in paradižnikom', 8, 7.6, 'EUR'),
(53, 'Margherita', 'image-52.jpeg', 'Pica obložena s sirom in olivo', 8, 6.1, 'EUR'),
(54, 'Con Tonno', 'image-53.jpeg', 'Pica obložena s sirom, tuno, tržasko omako in paradižnikom', 9, 8.2, 'EUR'),
(55, 'Frutti di mare', 'image-54.jpeg', 'Pica obložena s sirom, gamberi, dagnji, lignji in tržasko omako', 9, 10.6, 'EUR'),
(56, 'Prima triesta', 'image-55.jpeg', 'Pica obložena s sirom, panceto, vratovino, pečeno papriko in tržaško omako', 10, 8.8, 'EUR'),
(57, 'Prima speciale', 'image-56.jpeg', 'Pica obložena s sirom, umešanim jajčko, mozzarello, budjolo in rukolo', 10, 10.9, 'EUR'),
(58, 'Margherita', 'image-57.jpeg', 'Napoletana pica obložena s šunko, sirom in gobovo kremo', 11, 7.6, 'EUR'),
(59, 'Calabrese', 'image-58.jpeg', 'Napoletana pica obložena s šunko, sirom in gobovo kremo', 11, 11.3, 'EUR'),
(60, 'Budjola al pistacchio', 'image-59.jpeg', 'Napoletana pica obložena s šunko, sirom in gobovo kremo', 11, 9.8, 'EUR'),
(61, 'Vegetariano', 'image-60.jpeg', 'Napoletana pica obložena s šunko, sirom in gobovo kremo', 11, 8.8, 'EUR'),
(62, 'Napoletana', 'image-61.jpeg', 'Napoletana pica obložena s šunko, sirom in gobovo kremo', 11, 9.3, 'EUR'),
(63, 'Capricciosa', 'image-62.jpeg', 'Napoletana pica obložena s šunko, sirom in gobovo kremo', 11, 9.2, 'EUR'),
(64, 'Zelenjava', 'image-63.jpeg', 'pelati, paradižnik, paprika, melancani, artičoke, beluši, koruza, feferoni, rukola', 12, 1.2, 'EUR'),
(65, 'Salame', 'image-64.jpeg', 'šunka, kuhan pršut, vratovina, suha salama, hrenovka, pršut, budjola, panceta', 12, 2.2, 'EUR'),
(66, 'Siri', 'image-65.jpeg', 'trdi sir, mozzarella, beli sir, nacho sir, grana padano', 12, 2.2, 'EUR'),
(67, 'Gobe', 'image-66.jpeg', 'šampinjoni, jurčki', 12, 1.4, 'EUR'),
(68, 'Morski sadeži', 'image-67.jpeg', 'mešani morski sadeži, škampi, inčuni', 12, 2.2, 'EUR'),
(69, 'Omake in prelivi', 'image-68.jpeg', 'jurčkova omaka, tržaška omaka, tatarska omaka, kisla smetana,', 12, 2, 'EUR'),
(70, 'Jajce', 'image-69.jpeg', '', 12, 0.8, 'EUR'),
(71, 'Gratinirane palačinke s skuto', 'image-70.jpeg', 'Palačinke s skuto zapečene v krušni peči', 13, 4.6, 'EUR'),
(72, 'Palačinke', 'image-71.jpeg', 'Palačinke s čokolado, marmelado, lešniki ali orehi', 13, 4.1, 'EUR'),
(73, 'Brownie', 'image-72.jpeg', 'Topli čokoladni biskvit, sladoled, lešniki', 13, 5.2, 'EUR'),
(74, 'Banana split', 'image-73.jpeg', '', 13, 5.2, 'EUR'),
(75, 'Sladoled kepica', 'image-74.jpeg', 'Izberite si okus pri sladoledni vitrini', 13, 1.5, 'EUR'),
(76, 'Svedri z gamberi in pinjolami', 'image-75.jpeg', 'Gamberi, pesto, pinjole, češnjev paradižnik, ricotta, paradižnikova omaka, grana padano…', 14, 11.2, 'EUR'),
(77, 'Rezanci z morskimi sadeži', 'image-76.jpeg', 'gamberi, dagnje, lignji, česen, vino, paradižnikova omaka', 14, 11.2, 'EUR'),
(78, 'Tris testenin', 'image-77.jpeg', 'Široki rezanci s smetano in pršutom, tortelini s sirom z modro plesnijo, njoki s štirimi zelišči', 14, 9.4, 'EUR'),
(79, 'Toskanski tris', 'image-78.jpeg', 'Svedri s pomarančo, poprom in piščancem, rižota z jurčki in dimljenim sirom, široki rezanci s smetano in pršutom…', 14, 9.6, 'EUR'),
(80, 'Tris klasika', 'image-79.jpeg', 'Špageti po bolonjsko, njoki carbonara, mesna lazanja…', 14, 9.4, 'EUR'),
(81, 'Lazanja z bolonjsko omako', 'image-80.jpeg', 'Testnina, mleto meso s paradižnikovo omako, bešamel, grana padano, kisla smetana, sir…', 14, 8.1, 'EUR'),
(82, 'Njoki s 4 siri', 'image-81.jpeg', 'Njoki s sirom z modro plesnijo, ementalcem, dimljenim sirom, in grana padanom, zapečni v krušni peči', 14, 9.6, 'EUR'),
(83, 'Tortelini s sirom', 'image-82.jpeg', 'Tortelini s sirom z modro plesnijo, bučkami, korenjem in smetano, zapčeni v krušni peči', 14, 10.9, 'EUR'),
(84, 'Classic burger', 'image-83.jpeg', 'Ketchup, majoneza, govedina, zelena solata, čebula, paradižnik', 15, 7.6, 'EUR'),
(85, 'Cheeseburger', 'image-84.jpeg', 'Ketchup, majoneza, govedina, zelena solata, čebula, paradižnik, sir', 15, 7.8, 'EUR'),
(86, 'Chickenburger', 'image-85.jpeg', 'Ketchup, majoneza, piščančja prsa, zelena solata, čebula, paradižnik', 15, 7.5, 'EUR'),
(87, 'Mexico burger', 'image-86.jpeg', 'Koktejl omaka, omaka chili pop, goveje meso, jalapeno paprika, paradižnik, kumare', 15, 7.9, 'EUR'),
(88, 'Puranji zrezek po dunajsko', 'image-87.jpeg', 'S prilogo: ocvrt krompirčk, tatarska omaka', 16, 8.6, 'EUR'),
(89, 'Ocvrt piščančji file', 'image-88.jpeg', 'Polnjen s šunko in sirom, priložen pomfrit in tatarska omaka', 16, 8.9, 'EUR'),
(90, 'Puranji zrezek s sirom, smetano in gobami', 'image-89.jpeg', 'Priloga: krompirjevi kroketi', 16, 9.1, 'EUR'),
(91, 'Ocvrti lignji', 'image-90.jpeg', 'Priloga: ocvrt krompirčk, tatarska omaka', 16, 11.2, 'EUR'),
(92, 'Ocvrt sir', 'image-91.jpeg', 'Priloga: ocvrt krompirčk, tatarska omaka', 16, 7.9, 'EUR'),
(93, 'Rižota s piščancem in gobami', 'image-92.jpeg', 'Piščančji file, gobe, smetana…', 17, 8.6, 'EUR'),
(94, 'Paella', 'image-93.jpeg', 'Piščančji file, gamberi, paradižnik, smetana, rukola, češnjev paradižnik, grana padano..', 17, 11.5, 'EUR'),
(95, 'Rižota z zelenjavo', 'image-94.jpeg', 'Paprika, bučke, por, paradižnik, smetana, rukola, češnjev paradižnik, grana padano…', 17, 6.9, 'EUR'),
(96, 'Rižota z roastbeefom', 'image-95.jpeg', 'Roastbeef, sušeni paradižniki, paradižnikova omaka, rukala, češnjev paradižnik, grana padano…', 17, 12.2, 'EUR'),
(97, 'Tunina solata', 'image-96.jpeg', 'Zelena solata, radič, rukola, tuna, koromač, koruza, tatarska omaka', 18, 7.2, 'EUR'),
(98, 'Mixta', 'image-97.jpeg', 'Zelena solata, radič, koruza, rukola, ribani beli sir, olive, hišni preliv…', 18, 6.9, 'EUR'),
(99, 'Solata z mozzarello', 'image-98.jpeg', 'Zelena solata, radič, koruza, rukola, mozzarella, olive, hišni preliv…', 18, 6.9, 'EUR'),
(100, 'Ocvrta solata', 'image-99.jpeg', 'Zelena solata, rukola, radič, ocvrte bučke, paprika in melancani, ocvrt sir, tatarska omaka…', 18, 9.2, 'EUR'),
(101, 'Piščančja solata', 'image-100.jpeg', 'Piščanec v smetanovi omaki, zelena solata, radič, rukola, jajčevci, sojina omaka, balzamični kis…', 18, 8.1, 'EUR'),
(102, 'Cezarjeva solata', 'image-101.jpeg', 'Zelena solata, radič, piščanec, kruhovke kocke, jajce, rukola, koruza, balzamični preliv…', 18, 7.9, 'EUR'),
(103, 'Pomrit', 'image-102.jpeg', '', 19, 3.5, 'EUR'),
(104, 'Takitosi', 'image-103.jpeg', 'Ocvrti zavitki iz tortilij polnjene s piščancem', 19, 7.2, 'EUR'),
(105, 'Zelenjavni takitosi', 'image-104.jpeg', 'Ocvrti zavitki iz tortilij polnjene z zelenjavo', 19, 7, 'EUR'),
(106, 'Hrenovke v listnatem testu', 'image-105.jpeg', 'Hrenavke zavite v listanto testo in polite z jajcem', 19, 5.6, 'EUR'),
(107, 'Kava', 'image-106.jpeg', '', 20, 1.3, 'EUR'),
(108, 'Macchiato', 'image-107.jpeg', '', 20, 1.6, 'EUR'),
(109, 'Kava s smetano', 'image-108.jpeg', '', 20, 1.6, 'EUR'),
(110, 'Bela kava', 'image-109.jpeg', '', 20, 1.9, 'EUR'),
(111, 'Brezkofeinska kava', 'image-110.jpeg', '', 20, 1.6, 'EUR'),
(112, 'Irska kava', 'image-111.jpeg', '', 21, 4.3, 'EUR'),
(113, 'Ledena kava', 'image-112.jpeg', '', 21, 3.9, 'EUR'),
(114, 'Čaj', 'image-113.jpeg', '', 22, 1.4, 'EUR'),
(115, 'Vroča čokolada', 'image-114.jpeg', '', 22, 2.2, 'EUR'),
(116, 'Kakav', 'image-115.jpeg', '', 22, 1.7, 'EUR'),
(117, 'Mleko', 'image-116.jpeg', '', 22, 1, 'EUR');

-- --------------------------------------------------------

--
-- Table structure for table `item_rating`
--

DROP TABLE IF EXISTS `item_rating`;
CREATE TABLE `item_rating` (
  `id` int(11) NOT NULL,
  `quality` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `taste` int(11) DEFAULT NULL,
  `presentation` int(11) DEFAULT NULL,
  `memorability` int(11) DEFAULT NULL,
  `creativity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `narocnik`
--

DROP TABLE IF EXISTS `narocnik`;
CREATE TABLE `narocnik` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `tel` int(9) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oglas`
--

DROP TABLE IF EXISTS `oglas`;
CREATE TABLE `oglas` (
  `id` int(11) NOT NULL,
  `slika` varchar(200) DEFAULT NULL,
  `logo` varchar(200) DEFAULT NULL,
  `id_narocnik` int(11) DEFAULT NULL,
  `ogledi` int(11) DEFAULT 0,
  `kliki` int(11) DEFAULT 0,
  `budget` double DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `owns`
--

DROP TABLE IF EXISTS `owns`;
CREATE TABLE `owns` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `restavracija_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `location`) VALUES
(1, 'Cubo', 'Šmartinska c. 55, 1000 Ljubljana');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_rating`
--

DROP TABLE IF EXISTS `restaurant_rating`;
CREATE TABLE `restaurant_rating` (
  `id` int(11) NOT NULL,
  `id_rest` int(11) DEFAULT NULL,
  `hospitality` int(11) DEFAULT NULL,
  `atmosphere` int(11) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `food` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant_rating`
--

INSERT INTO `restaurant_rating` (`id`, `id_rest`, `hospitality`, `atmosphere`, `value`, `location`, `food`) VALUES
(1, 1, 5, 4, 1, 4, 5),
(2, 1, 5, 5, 3, 5, 5);

-- --------------------------------------------------------

--
-- Table structure for table `rest_admins`
--

DROP TABLE IF EXISTS `rest_admins`;
CREATE TABLE `rest_admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `tel` int(9) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`id`, `name`, `category_id`) VALUES
(1, 'Juhe', 3),
(2, 'Hladni napitki', 4),
(3, 'Brezalkoholne pijače', 4),
(4, 'Pivo', 4),
(5, 'Cider', 4),
(6, 'Žgane pijače', 4),
(7, 'Vina', 4),
(8, 'Pice', 5),
(9, 'Morske Pice', 5),
(10, 'Posebne pice', 5),
(11, 'Napoletana', 5),
(12, 'Dodatki', 5),
(13, 'Sladice', 6),
(14, 'Testenine', 7),
(15, 'Burgerji', 7),
(16, 'Navadne jedi', 7),
(17, 'Rižote', 7),
(18, 'Solate', 7),
(19, 'Prigrizki', 8),
(20, 'Kava', 9),
(21, 'Kavni napitki', 9),
(22, 'Topli napitki', 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allergens`
--
ALTER TABLE `allergens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rest_id` (`rest_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_rest` (`id_rest`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subcategory_id` (`subcategory_id`);

--
-- Indexes for table `item_rating`
--
ALTER TABLE `item_rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `narocnik`
--
ALTER TABLE `narocnik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oglas`
--
ALTER TABLE `oglas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_narocnik` (`id_narocnik`);

--
-- Indexes for table `owns`
--
ALTER TABLE `owns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `restavracija_id` (`restavracija_id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_rating`
--
ALTER TABLE `restaurant_rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_rest` (`id_rest`);

--
-- Indexes for table `rest_admins`
--
ALTER TABLE `rest_admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allergens`
--
ALTER TABLE `allergens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `item_rating`
--
ALTER TABLE `item_rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `narocnik`
--
ALTER TABLE `narocnik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oglas`
--
ALTER TABLE `oglas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `owns`
--
ALTER TABLE `owns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurant_rating`
--
ALTER TABLE `restaurant_rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rest_admins`
--
ALTER TABLE `rest_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allergens`
--
ALTER TABLE `allergens`
  ADD CONSTRAINT `allergens_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`rest_id`) REFERENCES `restaurant_rating` (`id`);

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`id_rest`) REFERENCES `restaurant` (`id`);

--
-- Constraints for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD CONSTRAINT `ingredients_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`);

--
-- Constraints for table `item_rating`
--
ALTER TABLE `item_rating`
  ADD CONSTRAINT `item_rating_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

--
-- Constraints for table `oglas`
--
ALTER TABLE `oglas`
  ADD CONSTRAINT `oglas_ibfk_1` FOREIGN KEY (`id_narocnik`) REFERENCES `narocnik` (`id`);

--
-- Constraints for table `owns`
--
ALTER TABLE `owns`
  ADD CONSTRAINT `owns_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `rest_admins` (`id`),
  ADD CONSTRAINT `owns_ibfk_2` FOREIGN KEY (`restavracija_id`) REFERENCES `restaurant` (`id`);

--
-- Constraints for table `restaurant_rating`
--
ALTER TABLE `restaurant_rating`
  ADD CONSTRAINT `restaurant_rating_ibfk_1` FOREIGN KEY (`id_rest`) REFERENCES `restaurant` (`id`);

--
-- Constraints for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
