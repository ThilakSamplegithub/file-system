const fs=require("fs")
// const data=fs.writeFileSync("./lecture.txt","This is my 3rd project")
try{
    const data=fs.writeFileSync("./lecture.txt","This is my 3rd project")
    console.log("I have to learn how try and catch working in sync also")
}catch(err){
    console.log(err)
}