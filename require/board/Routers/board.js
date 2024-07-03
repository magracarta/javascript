const express=require("express");
const router = express.Router();
const path = require("path");
const mysql = require("mysql2/promise");

async function getConnection(){
    return await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"adminuser",
        database:"board"

    });
}

router.get("/boardList",(req,res)=>{
    res.sendFile(path.join(__dirname,"/..","/views/boardList.html"))
});



router.get("/loginuser",(req,res)=>{
    let loginuser = req.session[req.cookies.session];
    res.send(loginuser);
});

module.exports = router;