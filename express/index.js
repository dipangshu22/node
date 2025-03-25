const express=require("express")
const app=express()
const fs=require("fs")

app.get('/',(req,res)=>{
    res.send("hello world")

})


app.get('/movies',(req,res)=>{
    fs.readFile('./movie.json',(err,result)=>{
        if(err)
            console.log("error")
        else{
            res.send(JSON.parse(result))
        }
    })

})

app.listen(8800)