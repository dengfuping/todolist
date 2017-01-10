/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 100113
Source Host           : localhost:3306
Source Database       : web_todolist

Target Server Type    : MYSQL
Target Server Version : 100113
File Encoding         : 65001

Date: 2017-01-10 14:23:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todolist
-- ----------------------------
DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist` (
  `todolist_id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(24) NOT NULL,
  `title` varchar(48) NOT NULL,
  `description` varchar(255) NOT NULL,
  `deadline` date NOT NULL,
  `state` int(1) DEFAULT NULL,
  PRIMARY KEY (`todolist_id`),
  KEY `username` (`username`) USING BTREE,
  CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todolist
-- ----------------------------
INSERT INTO `todolist` VALUES ('1', 'user1', 'web大作业', '按时完成并提交web大作业到老师的邮箱', '2017-01-01', '1');
INSERT INTO `todolist` VALUES ('2', 'user2', 'web期末考试', '提前复习web重点内容，做好考试准备', '2017-01-03', '0');
INSERT INTO `todolist` VALUES ('9', 'user2', 'Java试卷', '在考试前出完Java考试试卷', '2017-01-04', '0');
INSERT INTO `todolist` VALUES ('10', 'user2', '111', '111', '2017-01-05', '0');
INSERT INTO `todolist` VALUES ('11', 'user2', '222', '333', '2017-01-05', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(24) NOT NULL,
  `password` varchar(24) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('user1', '1001');
INSERT INTO `user` VALUES ('user2', '1002');
SET FOREIGN_KEY_CHECKS=1;
