const fs = require('fs')

console.log("Start")

fs.readFile("./welcome.txt",'utf-8',(err,data)=>{
        if (err) {
       console.log(err) 
    } else {
        console.log(data)
     }
 })

console.log(fs.readFileSync('./welcome.txt','utf-8'))