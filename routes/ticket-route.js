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

  router.get("/ticketsList", (req, res, next) => {
    Ticket.find()
    .then (tickets => {
      res.json({
          confirmation: "success",
          data: tickets
      })
    })
    .catch ( err => {
        res.json({
          confirmation: "fail",
          message: err.message
        })
    })
  })

  router.get("/ticketEdit/:ticketId", (req, res, next)=>{
    const ticket = req.params.ticketId
    Ticket.findById(ticket)
      .then( ticketInfo => {      
        res.json({
          confirmation: 'success',        
          data: ticketInfo
        })
      })
        .catch(err => {
            res.json({
              confirmation: 'fail',
              message: err.message
            })
        })
  })

  router.put("/updateTicket/:ticketId", (req, res, next) =>{
    const { accountName, contact, status, priority, issueType, primaryResource, ticketTitle, ticketDescription, ticketSolution, ticketId} = req.body;
    const UpdatedTicket = { accountName, contact, status, priority, issueType, primaryResource, ticketTitle, ticketDescription, ticketSolution, ticketId}
      
    
    Ticket.findByIdAndUpdate(req.params.ticketId, UpdatedTicket, { new: true }) 
    .then( theUpdatedTicket => {      
      res.json({
                
                data:theUpdatedTicket})    
    })
    .catch( err => next(err) )
  })

module.exports = router;