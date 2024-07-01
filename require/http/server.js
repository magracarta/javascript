//server.js

const http =require("http");
const fs = require('fs').promises;


const server = http.createServer(async (req, res)=>{
    try{
        let data = await fs.readFile("./index.html");
        res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
    }catch(err){
        console.error(err);
    }
});

server.listen(3000,()=>{console.log("3000에서 서버 연결")});