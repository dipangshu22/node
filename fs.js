const fs=require("fs")

const movie={
    name:"avengers",
    type:"hollywood"

}
 
const data=JSON.stringify(movie)
console.log(data)

fs.writeFile("movies.json",data,(err,moviedata)=>{
    console.log("file created and data is inserted")

})

