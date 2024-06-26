"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); //ctrl.output.home;
router.get("/login", ctrl.output.login); //라우팅
router.post("/login", ctrl.process.login); //API?


module.exports = router;