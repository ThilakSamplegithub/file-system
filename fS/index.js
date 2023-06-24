// console.log("hello")
const fs=require("fs")
// console.log(fs)
fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
 if(err){
    console.log("This is error")
    console.log(err)
 }else{
    console.log(data)
 }
})