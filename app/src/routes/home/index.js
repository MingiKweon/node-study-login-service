"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello); //ctrl.output.hello;
router.get("/login", ctrl.login); //라우팅


module.exports = router;