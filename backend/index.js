require('dotenv').config();
const express=require('express');
const cors=require('cors')
const port =process.env.PORT
const bodyParser=require('body-parser')
require('./d/con')

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})