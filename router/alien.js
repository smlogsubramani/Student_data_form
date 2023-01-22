const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("hey logs")
})

router.get('/priya',(req,res)=>{
    res.send("hey lgs")
})

router.get('/:navin',(req,res)=>{
    res.send(req.params.navin)
})




module.exports= router