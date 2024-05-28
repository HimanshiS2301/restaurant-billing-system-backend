const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup",async (req,res) => {
    try{
    const newUser=new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    }
    catch(err){
    res.status(400).json({message:err.message})
    }
})

module.exports=router;