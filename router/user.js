const express = require("express")
const router = express.Router()
const model = require('../models/model.js') 
const mongoose = require("mongoose")


//get all the list
router.get('/navin',async(req,res)=>{
    try{
        const alien = await model.find()
        res.json(alien)
    }catch(err){
        res.send('error'+err)
    }
})  

//get by id
router.get('/:id',async(req,res)=>{
    try{
        const alien = await model.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('error'+err)
    }
})  


//add all user
router.post('/navin',async(req,res)=>{
    
        const alien = new model({
            name : req.body.name,
            tech : req.body.tech,
        });
        try{
            const aftersave = await alien.save()
            res.json(aftersave)
        }   
        catch(err){
        res.send('error'+err)
    }
})  

module.exports= router