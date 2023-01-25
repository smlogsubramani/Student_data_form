const express = require("express")
const router = express.Router()
const model = require('../models/model.js') 
const mongoose = require("mongoose")


//get all the list
router.get('/navin',async(req,res)=>{
    try{          
                const alien = await model.find()
                res.send(alien);      
    }catch(err){
        res.send('error'+err)
    }
})  
//get by the sorted order
router.get('/navin/sort',async(req,res)=>{
    try{          
                const alien = await model.find().sort()
                res.send(alien);

    }catch(err){
        res.send('error'+err)
    }
})  
//search method

router.get('/navin/search',async(req,res)=>{
    try{
        
        const filters = req.query;
        const filteredUsers = data.filter(user => {
          let isValid = true;
          for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
          }
          return isValid;
        });
        res.send(filteredUsers);


      }
    catch(err){
        console.log(err);
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

//patch
router.patch('/:id',async(req,res)=>{
 
    try{
        const alien =   await model.findById(req.params.id)
        alien.sub =  req.body.sub
        const a2 = await alien.save()
        res.json(a2)
    }
    catch{
        res.send('error'+err)
    }
})

//delete

router.delete('/:id',async(req,res)=>{
    try{
        const alien = await model.findById(req.params.id)
        // alien.name = req.body.name
        const del = await alien.remove
        res.json(del);
    }catch(err){
        res.send(err)
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