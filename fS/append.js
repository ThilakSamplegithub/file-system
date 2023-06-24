const fs=require("fs")
fs.appendFile("./lecture.txt","\n This is my 4th project",(err,data)=>{
    if(err){
        console.log("not happening")
        console.log(err)
    }else{
        console.log("its happening")
    }
})