const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat')
.then(()=>{
    console.log("database is connected")
})