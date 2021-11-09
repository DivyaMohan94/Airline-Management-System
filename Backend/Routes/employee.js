const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require("../Models/employee");
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

router.post("/login", (req, res, next) => {
  Employee.find({ emailID: req.body.emailID })
    .exec()
    .then((employee) => {
      if (employee.length < 1) {
        res.setHeader("Content-Type", "application/json");
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, employee[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const id = JSON.stringify(result._id);
          res.cookie("cookie", id, {
            maxAge: 5000000,
            httpOnly: false,
            path: "/",
          });
          req.session.employee = result;
          res.setHeader("Content-Type", "application/json");
          res.status(200);
          result.status = 200;
          return res.status(200).json({
            message: "Auth successful",
          });
          // res.end(JSON.stringify(result));
        } else {
          res.status(401).json({
            message: "Auth failed",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
