const express = require('express');
const router = express.Router();

const Client = require('../models/client-model');
const Test = require("../models/test-model")


router.post ("/addClient", (req,res,next) =>{
    Client.create (req.body)
      .then (clientProfile => {
          res.json({
            confirmation: "success",
            data: clientProfile
          })
      })
      .catch ( err => {
          res.json({
            confirmation: "fail",
            message: err.message
          })
      })
})

router.get("/clientsList", (req, res, next) => {
  Client.find()
  .then (clients => {
    res.json({
        confirmation: "success",
        data: clients
    })
  })
  .catch ( err => {
      res.json({
        confirmation: "fail",
        message: err.message
      })
  })
})

//Update Client info
router.post ("/addTest", (req,res,next) =>{
  Test.create (req.body)
    .then (clientProfile => {
        res.json({
          confirmation: "success",
          data: clientProfile
        })
    })
    .catch ( err => {
        res.json({
          confirmation: "fail",
          message: err.message
        })
    })
})


module.exports = router;