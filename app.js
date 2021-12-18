const express=require('express');
const app=express();


app.use('/all',require('./routes/allroutes'))

app.listen(4000,()=>{
    console.log('server is running');
})