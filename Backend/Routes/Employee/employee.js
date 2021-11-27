const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require("../../Models/EmployeeModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

router.post("/signup", (req, res, next) => {
  Employee.find({ emailID: req.body.emailID })
    .exec()
    .then((emp) => {
      if (emp.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        const saltRounds = 10;
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const emp = new Employee({
              _id: new mongoose.Types.ObjectId(),
              emailID: req.body.emailID,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              password: hash,
            });
            emp
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "Employee created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});




module.exports = router;
