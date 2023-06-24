// This is reading file synchronously
const fs=require('fs')
let data=fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
console.log(data)