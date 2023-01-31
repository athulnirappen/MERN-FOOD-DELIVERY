const express = require('express');
const router = express.Router()
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret="ertyhjnbgefgjkmnbhyty"




//create user

router.post(
  "/createuser",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password","Incorrect password").isLength({ min: 5 }),
    async (req, res) => {
      
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
 }

      const salt = await bcrypt.genSalt(10);
      const secpassword=await bcrypt.hash(req.body.password,salt)


    try {
      const user = await User.create({
        name: req.body.name,
        password: secpassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.status(200).json({success:true});
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  }
);

//Login user

router.post(
  "/login",
  body("email").isEmail(),
  body("password", "Incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
 }
    try {
      const userData = await User.findOne({email:req.body.email});
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials " });
      }
      const comparePassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!comparePassword) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials " });
      } 

      const data = {
        user: {
          id:userData.id
        }
      }

      const token=jwt.sign(data,jwtSecret)
      return res.json({ success: true,token:token });
    } catch (error) {
      console.log(error);
      res.json({ success: false });

    }
  }
);











module.exports=router