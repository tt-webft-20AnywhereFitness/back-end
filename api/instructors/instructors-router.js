const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/classes", (req, res, next) => {
  console.log("Classes created...");
  console.log(`Payload is: ${req.body}`);
});

router.put("/classes", (req, res, next) => {
  console.log("Classes updated...");
  console.log(`Payload is: ${req.body}`);
});

router.delete("/classes", (req, res, next) => {
  console.log("Classes deleted...");
  console.log(`Payload is: ${req.body}`);
});
