const express = require('express');
const router = express.Router();

const Ticket = require('../models/ticket-model');



router.post ("/addTicket", (req,res,next) =>{
    Ticket.create (req.body)
      .then (ticket => {
          res.json({
            confirmation: "success",
            data: ticket
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