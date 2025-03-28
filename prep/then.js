var promise=new Promise((resolve,reject)=>{
    setTimeout((value)=>{
        console.log("first output")
    },2000)
    resolve(43)
})
promise.then(setTimeout(()=>{
    console.log("second output")

},6000)
    
)
.then((value)=>{
    setTimeout(()=>{
        console.log("then value")
    },3000)
    
})