const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/adminControllers");


router.get("/clients", adminControllers.deleteUser);




module.exports = router;