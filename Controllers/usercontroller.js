const usermodel = require('../models/model');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";
const signup = async(req,res)=>{
    //check if it is a existing user
    //hashed password
    //user Creation
    //token generation

    const{name,email,password} = req.body;
    try{
        const alreadyuser = await usermodel.findOne({
            email:email
        });
        if(alreadyuser){
            return res.status(400).json({"message":"User already exsit"})
        }
        const hashedpass = await bcrypt.hash(password,10);

        const result = await usermodel.create({
            email:email,
            password: hashedpass,
            name : name,
        });

        const token =  jwt.sign({
            email:result.email, id:result._id
        },SECRET_KEY);
        res.status(201).json({
            user:result , token: token
        }); 
    }catch(err){
        console.log(err);
    }
}


const signin = async(req,res)=>{
    const{email,password}=req.body;
    try{
        const alreadyuser = await usermodel.findOne({
            email:email
        });
        if(!alreadyuser){
            return res.status(404).json({"message":"User not found"})
        }
        const matchpass = await bcrypt.compare(password,alreadyuser.password);
        if(!matchpass){ 
            res.status(200).json({"message":"login credintials is wrong"});
        } 
        const token = jwt.sign({
            email:alreadyuser.email,
            id:alreadyuser._id
        },SECRET_KEY);
        res.status(201).json({user:alreadyuser, token:token});
    }catch(err){
        console.log(err);
        res.json({"message" : "something went wrong"+err});
    }
}

module.exports = {signup,signin}