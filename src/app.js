const express = require('express');

const app = express();


app.get("/user",(req,res)=>{
    res.send({firstName : "Rishabh Singh", lastName : "Singh"});
})

app.use('/test', (req, res)=>{
    res.end("Hello from Test page");
})


app.listen(7777, function(){
    console.log("Server is startted om port 7777")
})