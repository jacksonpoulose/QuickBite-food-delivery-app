const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const { getHomePage, getContactPage, getAboutPage, getServicesPage, getFAQPage } = require('../../controllers/common/commonControllers');

router.get("/home", getHomePage);
router.get("/contact", getContactPage);
router.get("/about", getAboutPage);
router.get("/services", getServicesPage);
router.get("/faq", getFAQPage);

module.exports = router;
