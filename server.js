/*
const http = require("http")

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hello World\n")
})
server.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/")
})*/

/*const modules= require('./modules')// exports module from module.js

console.log(modules.add(10,12))//calls the add function from module.js 
console.log(modules.sub(10,12)) //calls the sub function from module.js 
console.log(modules.multiply(10,12)) //calls the multiply function from module.js 
console.log(modules.divide(10,12)) //calls the divide function from module.js 
*/
// calculator on modules
/*
const http = require("http")
const modules = require("./modules")
const a = 100
const b = 30
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("The values are: "+a+" and "+b+"\n")
    res.write("Addition:"+modules.add(a,b)+"\n")
    res.write("Subtraction:"+modules.sub(a,b)+"\n")
    res.write("Multiplication:"+modules.multiply(a,b)+"\n")
    res.write("Division:"+modules.divide(a,b)+"\n")
    res.end()
})
server.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/")
})*/