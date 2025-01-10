const fs = require("fs")
const create=(student)=>{
let students=[]

fs.readFile("./student.json",'utf8',(err,data)=>{
    let ac=data? JSON.parse(data):[];
    if(ac.length >0){
        students=[...ac.student]
    }else{
        students=[student]
    }
    
    fs.writeFile("./data.json",JSON.stringify(students),(err)=>{
        if(err) 
            {console.log("Error occured")
            }
            return }
    })

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write(JSON.stringify(filteredData))
    res.end()
})
server.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/")
})
})