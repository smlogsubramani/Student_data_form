const express = require("express")
const mongoose = require("mongoose")
const url ='mongodb://127.0.0.1:27017'


const app = express()
mongoose.connect(url)
const con = mongoose.connection

con.on('open',function(){
    console.log("hey connection established successfully")
})

app.use(express.json());

//routes individual
const adminrouter = require('./router/alien.js')
app.use('/admin',adminrouter)

const user = require('./router/user.js')
app.use('/user',user)

app.listen(9000,() => {
    console.log("server started")
})

