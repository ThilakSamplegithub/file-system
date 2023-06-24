const fs=require("fs")
// loop hole with this command is : It overwrites previous command, so we need to replace writeFile with appendFile
fs.writeFile("./lecture.txt","This is my second Project",(err,data)=>{
    if(err){
        console.log('this is failed')
        console.log(err)
    }else{
        console.log("wrote it")
    }
})