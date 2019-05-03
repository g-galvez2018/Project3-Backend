const express = require('express');
const router = express.Router();

const User = require('../models/user-model');

const passport = require('passport');

const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

////////// SIGN UP ////////////////
router.post("/signup", (req, res, next) => {
  const { fullName, email, originalPassword } = req.body; 

  if(fullName == '' || email == '' || originalPassword.match(/[0-9]/) === null){
    // send error JSON if any of the fields is empty or password doesn't contain a number
    res.status(401).json({ message: "All fields need to be filled and password must contain a number." })
    return;
  }

  User.findOne({ email })
  .then(foundUser => {
    if(foundUser !==null){
      res.status(401).json({ message: "A user with the same email is already registered!" })
      return;
    }  
    // encrypt the submitted password before saving
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const encryptedPassword = bcrypt.hashSync(originalPassword, salt);
    let role = '';
    let companyName = email.substring(email.lastIndexOf("@"))
    companyName === '@irontask.com' ? role = 'Technician' : role = 'Client';

      User.create({ fullName, email, encryptedPassword, role})
      .then(userDoc => {
        // if all good, log in the user automatically
        // "req.logIn()" is a Passport method that calls "serializeUser()"
        // (that saves the USER ID in the session)
          req.login(userDoc, () => {
            // hide "encryptedPassword" before sending the JSON (it's a security risk)
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });
          });
      })
      .catch( err => next(err)); //closing User.create()
  })
  .catch( err => next(err)); // closing User.findOne();
})

//////////////// LOGIN /////////////////////
router.post("/login", (req, res, next) => {
   // LOGIN WITH PASSPORT-LOCAL-STRATEGY:
  passport.authenticate('local', (err, userDoc, failureDetails) => {

    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return;
    }
    if (!userDoc) {
      res.status(401).json(failureDetails);
      return;
    }
    req.login(userDoc, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong while login!' });
        return;
      }
      // We are now logged in (notice req.user) => we can send req.user since we have it available
      // or userDoc, which is the placeholder how we named the user document we found in DB based on inputted email and password
      // res.json(req.user);
      res.json({ userDoc });
    });
  })(req, res, next);
})

//////////////// LOGOUT /////////////////////

router.delete("/logout", (req, res, next) => {
  // "req.logOut()" is a Passport method that removes the user ID from session
  req.logOut();

  // send empty "userDoc" when you log out
  res.json({ userDoc: null });
});

// GET USER PROFILE
router.get("/profile/:userId", (req, res, next) => {
  User.findById(req.params.userId)
    .then( userProfile => {
      userProfile.encryptedPassword = undefined;
      res.json({userProfile})
    })
    .catch( err => next(err) )
  })

// UPDATE USER PROFILE

router.put("/update/:userId", (req, res, next) =>{
  const { status, role} = req.body;
  const UpdatedUser = {
    status,
    role
  }
  User.findByIdAndUpdate(req.params.userId, UpdatedUser, { new: true }) 
  .then( theUpdatedUser => {
    theUpdatedUser.encryptedPassword = undefined;
    res.json({theUpdatedUser})    
  })
  .catch( err => next(err) )
})

// GET LIST OF USERS
router.get("/usersList", (req, res, next)=> {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({ message: 'Something went wrong while retrieving users' });
    }
    users.encryptedPassword = undefined;
    res.json({users})
  })
})

//Get lists of user based on query and only send back what is needed - Query filter
router.get("/usersListApi", (req, res, next)=>{
  const query = req.query
  User.find(query, 'fullName')
    .then( userProfiles => {      
      res.json({
        confirmation: 'success',        
        data: userProfiles
      })
    })
      .catch(err => {
          res.json({
            confirmation: 'fail',
            message: err.message
          })
      })
})


// GET "/checkuser" allows the client to check to see:
// (a) if we are logged-in
// (b) what are the details of the logged-in user
router.get("/checkuser", (req, res, next) => {
  if (req.user) {
  // hide "encryptedPassword" before sending the JSON (it's a security risk)
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  }
  else {
    res.json({ userDoc: null });
  }
});

module.exports = router;