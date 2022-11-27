const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//access through dotenv configs
const db = process.env.MONGO_URI;

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.error("Connected to mongodb!!");
  }
});
// verify token middleware
function verifyToken(req, res, next) {
  // if no token return un authorized
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  // extract token from headers if it exists
  console.log("req.headers", req.headers);
  let token = req.headers.authorization.split(" ")[1];
  console.log("token", token);
  if (token === null || token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  // if payload exists check if payload contains the secretkey which we used to hash the id
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  } else {
    req.userId = payload.subject;
  }
  next();
}

router.get("/", (req, res) => {
  res.send("From API route");
});
// POST register
router.post("/register", (req, res) => {
  // extract data from request object
  let userData = req.body;
  //convert the data into a model that mongo understands
  let user = new User(userData);
  //save the data into db
  // user.save will give the error or registered user as callback
  user.save((error, registeredUser) => {
    if (error) {
      console.log("register-error", error);
    } else {
      // destructure the id from the db and send it to the front end as a token
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token: token });
    }
  });
});
// POST login
router.post("/login", (req, res) => {
  let userData = req.body;
  // Find the user if matches and check if the password in db matches with password in request
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log("error-login", error);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          // destructure the id from the db and send it to the front end as a token
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token: token });
        }
      }
    }
  });
});
//Hardcoded events
router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(events);
});
// verifyToken is a middleware which checks if the token is valid
// if invalid token the api will not execute
router.get("/special", verifyToken, (req, res) => {
  let specialEvents = [
    {
      _id: "1",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(specialEvents);
});

module.exports = router;
