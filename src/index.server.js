const express=require('express')
const env=require('dotenv')
const app=express()
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
env.config();
//mongodb connection
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
mongoose.connect(
    'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
   ) .then(()=>{
        console.log("Database Connected")
    });

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: `Hello from Server`
    });
});

app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message: req.body
    });
});

app.listen(process.env.PORT, () =>{
    console.log(`console is running on port ${process.env.PORT}`)
})