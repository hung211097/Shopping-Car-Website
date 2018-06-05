/*
 Navicat Premium Data Transfer

 Source Server         : team14
 Source Server Type    : MySQL
 Source Server Version : 100128
 Source Host           : localhost:3306
 Source Schema         : carshopping

 Target Server Type    : MySQL
 Target Server Version : 100128
 File Encoding         : 65001

 Date: 03/06/2018 22:53:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dongxe
-- ----------------------------
DROP TABLE IF EXISTS `dongxe`;
CREATE TABLE `dongxe`  (
  `MaDongXe` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `TenDongXe` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL DEFAULT NULL,
  `DuongDan` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  PRIMARY KEY (`MaDongXe`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_vietnamese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of dongxe
-- ----------------------------
INSERT INTO `dongxe` VALUES ('T01', 'Cabriolet', '/image/type/cabriolet.png');
INSERT INTO `dongxe` VALUES ('T02', 'Coupe', '/image/type/coupe.png');
INSERT INTO `dongxe` VALUES ('T03', 'Sedan', '/image/type/sedan.png');
INSERT INTO `dongxe` VALUES ('T04', 'Hatchback', '/image/type/hatchback.png');
INSERT INTO `dongxe` VALUES ('T05', 'SUV-Crossover', '/image/type/SUV.png');
INSERT INTO `dongxe` VALUES ('T06', 'Truck', '/image/type/truck.png');
INSERT INTO `dongxe` VALUES ('T07', 'Van-Minivan', '/image/type/van.png');
INSERT INTO `dongxe` VALUES ('T08', 'Wagon', '/image/type/wagon.png');

-- ----------------------------
-- Table structure for hangxe
-- ----------------------------
DROP TABLE IF EXISTS `hangxe`;
CREATE TABLE `hangxe`  (
  `MaHangXe` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `TenHangXe` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL DEFAULT NULL,
  `DuongDan` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  PRIMARY KEY (`MaHangXe`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_vietnamese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of hangxe
-- ----------------------------
INSERT INTO `hangxe` VALUES ('H01', 'AstonMartin', '/image/logo/AstonMartin.png');
INSERT INTO `hangxe` VALUES ('H02', 'Audi', '/image/logo/Audi.png');
INSERT INTO `hangxe` VALUES ('H03', 'BMW', '/image/logo/BMW.png');
INSERT INTO `hangxe` VALUES ('H04', 'Chevrolet', '/image/logo/Chevrolet.png');
INSERT INTO `hangxe` VALUES ('H05', 'Ford', '/image/logo/Ford.png');
INSERT INTO `hangxe` VALUES ('H06', 'Honda', '/image/logo/Honda.png');
INSERT INTO `hangxe` VALUES ('H07', 'Huyndai', '/image/logo/Huyndai.png');
INSERT INTO `hangxe` VALUES ('H08', 'KIA', '/image/logo/KIA.png');
INSERT INTO `hangxe` VALUES ('H09', 'Mazda', '/image/logo/Mazda.png');
INSERT INTO `hangxe` VALUES ('H10', 'Mercedes', '/image/logo/Mercedes.png');
INSERT INTO `hangxe` VALUES ('H11', 'Peugeot', '/image/logo/Peugeot.png');
INSERT INTO `hangxe` VALUES ('H12', 'Toyota', '/image/logo/Toyota.png');
INSERT INTO `hangxe` VALUES ('H13', 'Volkswagen', '/image/logo/Volkswagen.png');

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions`  (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`session_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_vietnamese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xe
-- ----------------------------
DROP TABLE IF EXISTS `xe`;
CREATE TABLE `xe`  (
  `MaXe` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `TenXe` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  `HangXe` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL DEFAULT NULL,
  `DongXe` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL DEFAULT NULL,
  `Gia` double(11, 0) NULL DEFAULT NULL,
  `XuatXu` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  `MoTa` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  `NhienLieu` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  `HopSo` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  `MauSac` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NULL,
  `SoCua` int(11) NULL DEFAULT NULL,
  `SoCho` int(11) NULL DEFAULT NULL,
  `SoLuotXem` int(11) NULL DEFAULT 0,
  `SoLuongBan` int(11) NULL DEFAULT NULL,
  `NgayNhan` date NULL DEFAULT NULL,
  `SoLuongTon` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MaXe`) USING BTREE,
  INDEX `Foreign_HangXe`(`HangXe`) USING BTREE,
  INDEX `Foreign_DongXe`(`DongXe`) USING BTREE,
  CONSTRAINT `Foreign_DongXe` FOREIGN KEY (`DongXe`) REFERENCES `dongxe` (`MaDongXe`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `Foreign_HangXe` FOREIGN KEY (`HangXe`) REFERENCES `hangxe` (`MaHangXe`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_vietnamese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of xe
-- ----------------------------
INSERT INTO `xe` VALUES ('X001', 'Aston Martin DB11', 'H01', 'T01', 4829000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Số tự động', 'Vàng nâu', 2, 2, 6203, 4, '2016-07-14', 121);
INSERT INTO `xe` VALUES ('X002', 'BMW 4 Series Convertible', 'H03', 'T01', 1116000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Số tự động', 'Trắng', 2, 4, 12903, 10, '2015-10-28', 100);
INSERT INTO `xe` VALUES ('X003', 'Chevrolet Camaro LS 2017', 'H04', 'T02', 3200000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Sàn 6 cấp', 'Đen', 2, 4, 32003, 20, '2017-06-22', 80);
INSERT INTO `xe` VALUES ('X004', 'Volkswagen Scirocco R 2017', 'H13', 'T02', 1600000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 2, 4, 5007, 5, '2017-03-30', 50);
INSERT INTO `xe` VALUES ('X005', 'Hyundai Grand i10 Sedan 1.2 MT 2018', 'H07', 'T03', 400000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Sàn 6 cấp', 'Trắng', 4, 5, 21093, 52, '2018-01-02', 30);
INSERT INTO `xe` VALUES ('X006', 'Mazda 3 1.5 AT Sedan 2018', 'H09', 'T03', 649000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 8765, 8, '2018-02-03', 20);
INSERT INTO `xe` VALUES ('X007', 'KIA Cerato 2.0 AT 2018', 'H08', 'T03', 639000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đỏ', 4, 5, 17037, 24, '2018-02-26', 50);
INSERT INTO `xe` VALUES ('X008', 'Ford EcoSport Titanium 1.5L AT 2018', 'H05', 'T05', 648000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 7, 4762, 5, '2018-01-29', 100);
INSERT INTO `xe` VALUES ('X009', 'Peugeot-5008-1-6L-Turbo', 'H11', 'T05', 1399000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 7, 21216, 25, '2016-07-15', 40);
INSERT INTO `xe` VALUES ('X010', 'Audi TT 2.0 2007', 'H02', 'T02', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Đỏ', 2, 4, 17483, 15, '2015-03-05', 5);
INSERT INTO `xe` VALUES ('X011', 'Hyundai Genesis Coupe 2.0T', 'H07', 'T02', 630000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Sàn 6 cấp', 'Vàng', 2, 4, 10009, 8, '2016-12-29', 60);
INSERT INTO `xe` VALUES ('X012', 'BMW 6-series Gran Coupe', 'H03', 'T02', 1867000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 40127, 40, '2017-09-26', 70);
INSERT INTO `xe` VALUES ('X013', 'BMW 4-series Gran Coupe', 'H03', 'T02', 1000000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 5, 64592, 65, '2017-01-17', 10);
INSERT INTO `xe` VALUES ('X014', 'Mercedes C200 Cabriolet', 'H10', 'T01', 2800000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 2, 4, 11041, 13, '2016-11-10', 15);
INSERT INTO `xe` VALUES ('X015', 'BMW 420i Cabriolet', 'H03', 'T01', 2700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 2, 5, 3046, 5, '2016-10-24', 30);
INSERT INTO `xe` VALUES ('X016', 'Audi A3 Cabriolet', 'H02', 'T01', 1900000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đỏ', 2, 2, 101293, 72, '2015-08-08', 0);
INSERT INTO `xe` VALUES ('X017', 'Mercedes Benz CLK 320 Cabriolet', 'H10', 'T01', 650000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 2, 4, 19827, 21, '2016-05-22', 13);
INSERT INTO `xe` VALUES ('X018', 'Volkswagen Beetle R-Line', 'H13', 'T02', 1500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 2, 4, 17826, 26, '2017-09-25', 54);
INSERT INTO `xe` VALUES ('X019', 'KIA-Sorento-DATH-2WD', 'H08', 'T05', 949000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 2.2L', 'Tự động 6 cấp', 'Đỏ', 4, 7, 7826, 5, '2014-11-10', 45);
INSERT INTO `xe` VALUES ('X020', 'Mazda-CX-5-2-5L-AWD', 'H09', 'T05', 999000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 4, 5, 34182, 59, '2015-04-10', 12);
INSERT INTO `xe` VALUES ('X021', 'Peugeot-3008-1-6L-Turbo', 'H11', 'T05', 1399000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 7, 34093, 31, '2016-08-23', 11);
INSERT INTO `xe` VALUES ('X022', 'KIA Optima 2.4 GT Line', 'H08', 'T03', 915000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 5, 61793, 35, '2015-06-02', 1);
INSERT INTO `xe` VALUES ('X023', 'Toyota Corolla Altis 1.8G CVT', 'H12', 'T03', 731000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động vô cấp', 'Nâu', 4, 5, 23524, 41, '2016-02-29', 12);
INSERT INTO `xe` VALUES ('X024', 'Toyota Vios 1.5E MT', 'H12', 'T03', 500000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Sàn 5 cấp', 'Xám', 2, 4, 12267, 18, '2017-03-10', 18);
INSERT INTO `xe` VALUES ('X025', 'Aston Martin One 77', 'H01', 'T01', 47000000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 2, 2, 249832, 4, '2017-04-05', 78);
INSERT INTO `xe` VALUES ('X026', 'Audi A4', 'H02', 'T03', 1400000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 1.8L', 'Tự động 6 cấp', 'Trắng', 4, 4, 39823, 22, '2016-11-04', 66);
INSERT INTO `xe` VALUES ('X027', 'Chevrolet Captiva', 'H04', 'T05', 3500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 7, 47892, 34, '2015-04-03', 45);
INSERT INTO `xe` VALUES ('X028', 'Aston Martin Rapide S', 'H01', 'T02', 4700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 4, 28893, 10, '2017-03-17', 0);
INSERT INTO `xe` VALUES ('X029', 'Aston Martin Vanquish S Ultimate', 'H01', 'T02', 38000000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 2, 2, 29912, 5, '2018-02-03', 100);
INSERT INTO `xe` VALUES ('X030', 'Aston Martin Vulcan', 'H01', 'T02', 52000000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 2, 2, 328934, 3, '2018-04-07', 24);
INSERT INTO `xe` VALUES ('X031', 'Audi RS6 Avant Performance', 'H02', 'T08', 3510000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 4, 5, 43651, 12, '2016-09-06', 28);
INSERT INTO `xe` VALUES ('X032', 'Audi S6 Avant', 'H02', 'T08', 1100000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 1.8L', 'Tự động 6 cấp', 'Đỏ', 4, 5, 88812, 27, '2015-08-08', 21);
INSERT INTO `xe` VALUES ('X033', 'BMW 700 Series', 'H03', 'T02', 1400000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Trắng', 4, 5, 23904, 15, '2016-11-30', 100);
INSERT INTO `xe` VALUES ('X034', 'Chevrolet Spark 1.2 LS 2018', 'H04', 'T04', 400000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Sàn 5 cấp', 'Xanh chuối', 4, 5, 768931, 64, '2018-01-03', 23);
INSERT INTO `xe` VALUES ('X035', 'Chevrolet Trailblazer 2018', 'H04', 'T05', 1000000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 7, 64821, 32, '2018-02-12', 54);
INSERT INTO `xe` VALUES ('X036', 'Chevrolet Traverse', 'H04', 'T05', 2900000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 7, 98839, 51, '2017-04-08', 36);
INSERT INTO `xe` VALUES ('X037', 'Ford Focus 1.5L Ecoboost Sport 2018', 'H05', 'T04', 760000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 4, 5, 23237, 22, '2018-02-07', 75);
INSERT INTO `xe` VALUES ('X038', 'Ford Fiesta 2018', 'H05', 'T04', 1300000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 4, 5, 12242, 14, '2018-03-09', 41);
INSERT INTO `xe` VALUES ('X039', 'Ford Ranger WILDTRAK 3.2 4X4 AT', 'H05', 'T06', 909000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 3.2L', 'Tự động 6 cấp', 'Cam nâu', 4, 5, 39209, 12, '2016-12-16', 20);
INSERT INTO `xe` VALUES ('X040', 'Ford Ranger XLS 2.2 4x2 MT', 'H05', 'T06', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 2.2L', 'Sàn 6 cấp', 'Xám', 4, 5, 75823, 56, '2017-06-28', 15);
INSERT INTO `xe` VALUES ('X041', 'Honda Civic LX', 'H06', 'T02', 1900000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 172897, 87, '2016-11-23', 0);
INSERT INTO `xe` VALUES ('X042', 'Honda Jazz RS 2018', 'H06', 'T04', 650000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động vô cấp', 'Trắng', 4, 5, 65412, 46, '2018-02-05', 3);
INSERT INTO `xe` VALUES ('X043', 'Honda Odyssey 2018', 'H06', 'T07', 1990000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 7, 87811, 44, '2018-01-06', 4);
INSERT INTO `xe` VALUES ('X044', 'Honda Ridgeline 2017', 'H06', 'T06', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 5, 10939, 17, '2017-07-13', 65);
INSERT INTO `xe` VALUES ('X045', 'Hyundai Elantra Hatchback', 'H07', 'T04', 750000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 98893, 53, '2016-12-16', 3);
INSERT INTO `xe` VALUES ('X046', 'Hyundai Entourage Limited', 'H07', 'T07', 750000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Vàng nhạt', 4, 7, 57893, 35, '2017-01-30', 37);
INSERT INTO `xe` VALUES ('X047', 'Hyundai Veloster Hatchback', 'H07', 'T04', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Cam', 2, 4, 97844, 76, '2016-04-27', 24);
INSERT INTO `xe` VALUES ('X048', 'KIA Cerato 1.6MT', 'H08', 'T03', 800000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 4, 67311, 45, '2016-05-12', 1);
INSERT INTO `xe` VALUES ('X049', 'KIA Morning 2016', 'H08', 'T04', 550000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 71892, 24, '2016-06-11', 15);
INSERT INTO `xe` VALUES ('X050', 'KIA Sedona EX', 'H08', 'T07', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Nâu', 4, 7, 61698, 41, '2015-11-30', 88);
INSERT INTO `xe` VALUES ('X051', 'Mazda 3 1.5 HATCHBACK FACELIFT 2018', 'H09', 'T04', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đỏ', 4, 7, 32134, 37, '2018-01-02', 10);
INSERT INTO `xe` VALUES ('X052', 'Mazda 5', 'H09', 'T07', 620000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 7, 23623, 21, '2017-10-25', 93);
INSERT INTO `xe` VALUES ('X053', 'Mazda BT-50 2.2 AT 2WD 2017', 'H09', 'T06', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 2.2L', 'Tự động 6 cấp', 'Nâu', 4, 5, 42890, 36, '2017-05-05', 12);
INSERT INTO `xe` VALUES ('X054', 'Mazda Miata Convertible', 'H09', 'T01', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 2, 2, 35400, 20, '2016-12-02', 45);
INSERT INTO `xe` VALUES ('X055', 'Mercedes-AMG C63 S AMG', 'H10', 'T08', 1500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Trắng', 4, 5, 21809, 73, '2015-07-29', 76);
INSERT INTO `xe` VALUES ('X056', 'Mercedes-AMG CLA45', 'H10', 'T08', 2800000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Trắng', 4, 5, 68472, 26, '2016-04-07', 66);
INSERT INTO `xe` VALUES ('X057', 'Mercedes-AMG E63 S', 'H10', 'T08', 2600000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 5, 392030, 40, '2015-10-26', 88);
INSERT INTO `xe` VALUES ('X058', 'Peugeot 508', 'H11', 'T03', 1300000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 4, 49083, 50, '2016-04-24', 99);
INSERT INTO `xe` VALUES ('X059', 'Peugeot 208', 'H11', 'T04', 850000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Cam', 4, 5, 12329, 19, '2014-10-29', 24);
INSERT INTO `xe` VALUES ('X060', 'Peugeot RCZ', 'H11', 'T01', 1900000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đỏ', 2, 2, 31089, 25, '2017-06-20', 100);
INSERT INTO `xe` VALUES ('X061', 'Toyota Camry', 'H12', 'T03', 2000000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 87209, 35, '2018-04-24', 21);
INSERT INTO `xe` VALUES ('X062', 'Toyota Corolla Verso Minivens 2002', 'H12', 'T07', 2400000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 7, 74190, 36, '2014-03-13', 0);
INSERT INTO `xe` VALUES ('X063', 'Toyota Hilux 2018', 'H12', 'T06', 800000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Dầu 4L', 'Tự động 6 cấp', 'Đỏ', 4, 5, 62190, 43, '2018-02-18', 12);
INSERT INTO `xe` VALUES ('X064', 'Volkswagen Passat 2018', 'H13', 'T03', 1600000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Đen', 4, 4, 143709, 51, '2018-03-08', 3);
INSERT INTO `xe` VALUES ('X065', 'Volkswagen Polo Sedan', 'H13', 'T03', 1500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Vàng nhạt', 4, 4, 34144, 20, '2017-09-04', 8);
INSERT INTO `xe` VALUES ('X066', 'Volkswagen Tiguan Allspace', 'H13', 'T05', 1400000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đỏ', 4, 5, 43526, 29, '2016-11-03', 9);
INSERT INTO `xe` VALUES ('X067', 'Honda Insight Prototype', 'H06', 'T02', 1500000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 5, 82341, 45, '2016-03-25', 57);
INSERT INTO `xe` VALUES ('X068', 'BMW 330i Sports Wagon 2017', 'H03', 'T08', 950000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xanh dương', 4, 5, 54654, 30, '2017-06-10', 45);
INSERT INTO `xe` VALUES ('X069', 'Ford Transit Connect Minivan 2018', 'H05', 'T07', 700000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Đỏ', 4, 7, 64986, 25, '2018-01-21', 67);
INSERT INTO `xe` VALUES ('X070', 'Audi A4 Allroad 2017', 'H02', 'T08', 1000000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 76877, 53, '2017-03-11', 88);
INSERT INTO `xe` VALUES ('X071', 'Aston Martin Vantage', 'H01', 'T02', 4300000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Xanh vàng', 2, 2, 83123, 10, '2016-12-29', 100);
INSERT INTO `xe` VALUES ('X072', 'Chevrolet Sonic 2015', 'H04', 'T03', 2500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 7 cấp', 'Trắng', 4, 4, 104376, 32, '2015-08-28', 60);
INSERT INTO `xe` VALUES ('X073', 'Hyundai i800', 'H07', 'T07', 1800000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Đen', 4, 7, 59311, 40, '2016-02-19', 50);
INSERT INTO `xe` VALUES ('X074', 'Mercedes Benz Gla Class 2018', 'H10', 'T05', 2500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Xám', 4, 5, 78901, 55, '2018-03-02', 40);
INSERT INTO `xe` VALUES ('X075', 'Peugeot 208 GTi Prestige', 'H11', 'T06', 1900000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 2, 5, 98765, 63, '2017-06-13', 30);
INSERT INTO `xe` VALUES ('X076', 'Toyota Hilux Vigo Champ', 'H12', 'T06', 2800000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 5, 33210, 24, '2015-08-27', 0);
INSERT INTO `xe` VALUES ('X077', 'Volkswagen Golf Gti Dsg', 'H13', 'T05', 2500000000, 'Nước ngoài', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 2, 5, 43056, 30, '2016-10-27', 20);
INSERT INTO `xe` VALUES ('X078', 'Honda-CR-V-E', 'H06', 'T05', 958000000, 'Trong nước', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo quis quidem, totam provident doloribus rerum sunt quia, officia cum eius nisi iusto at accusamus quos atque velit? At, ex!', 'Xăng', 'Tự động 6 cấp', 'Trắng', 4, 7, 26093, 41, '2016-11-10', 10);

SET FOREIGN_KEY_CHECKS = 1;
