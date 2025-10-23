const express = require('express');
const router = express.Router();

router.get("/menu", (req, res) => {
    res.send("Restaurant Menu");
});

module.exports = router;
