const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/fetchUser");

const JWT_SECRET = "mynameisashishandthisisasecret";

//ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [ // validation
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success: false, error: "Sorry, a user with this email is already exist" });
      }

      // Generate a salt and hash the password
      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);

      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // Create a JWT token

      const data = {
        user: {
          id: user.id, // user id
        },
      };


      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);

      // res.json(user);
      res.json({ success: true, authToken });

    } catch (error) {  // catch errors
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);



//ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required

router.post(
  "/login",
  [ // validation
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check whether the user with this email exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
      }

      // Compare the password with the hashed password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
      }

      // Create a JWT token
      const data = {
        user: {
          id: user.id, // user id
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, authToken });

    } catch (error) {  // catch errors
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);



//ROUTE 3: Get loggedin User details using: POST "/api/auth/getuser". Login required
router.post(
  "/getuser", fetchUser, // middleware to fetch user from jwt token
  async (req, res) => {
    try {
      // Get the user from the jwt token and find the user in db
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {  // catch errors
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);


module.exports = router;
