
const fs=require("fs")
const movie={
    name:"avengers",
    type:"hollywood"

}
const data=JSON.stringify(movie)
        console.log(data)

        
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("result after 2 sec")
        resolve(
        
        fs.writeFile("movies2.json",data,(err,moviedata)=>{
            console.log("file created and data is inserted")
        
        }))

    },2000)
    
    


})

promise.then((value)=>{
    console.log(value)

})




 

