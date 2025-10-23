const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin/adminRoutes");
const restaurantRoutes = require("./restaurant/restaurantRoutes");
const commonRoutes = require("./common/commonRoutes");
const userRoutes = require("./user/userRoutes");
const authRoutes = require("./common/authRoutes");

router.use("/admin", adminRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/common", commonRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
