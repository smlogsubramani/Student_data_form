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

//search method by the name using prebuilt methods
router.get('/navin/search/:key',async(req,res)=>{
    const search = await model.find({
        "$or":[
            {name:{
                $regex:req.params.key
            }}
        ]
    })
    res.send(search);
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

//put
router.put('/:id',async(req,res)=>{
 
    try{
        const alien =   await model.findById(req.param.id)
        const update =  alien.updateOne(
            {id :req.params.id},  {$set :{tech:req.body}})
        console.log(req.body.name)
        res.send("updated")
    }
    catch(err){
        res.send('error'+err)
    }
})

//delete

router.delete('/:id',async(req,res)=>{
    try{
        const alien = await model.findById(req.params.id)
        const del = alien.deleteone({
            name : req.body
        }
        );
        res.send("done")
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


