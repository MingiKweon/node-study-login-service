"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const home = require("./src/routes/home"); //라우팅

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home); //미들웨어를 등록해주는 메서드
module.exports = app;

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if (req.url ==  "/") {
//         res.end("여기는 루트입니다.");
//     } else {
//         res.end("여기는 루트가 아닙니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });
