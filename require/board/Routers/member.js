const express = require("express");
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


router.post("/login",async (req,res,next)=>{
    const {userid, pwd} = req.body;
    const sql = "select * from member where userid = ?";
    
    try{    
        let connection = await getConnection();
        let [result,fields] = await connection.query(sql, [userid]);
        if(result.length > 0){
            if(pwd == result[0].pwd){
                let uniqueInt = Date.now();
                req.session[uniqueInt] = result[0];
                res.cookie("session",uniqueInt,{httpOnly:true, path:"/"});
                res.json({msg:"ok"});
            }else res.json({msg:"비밀번호가 틀립니다."});
        }else res.json({msg:"아이디가 없습니다."});

    }catch(err){
        next(err);
    }

});

router.get("/joinForm",(req,res)=>{
    res.sendFile(path.join(__dirname,"/..","/views/joinForm.html"));
});

router.post("/join",async (req,res)=>{
    let {userid, pwd, name, email, phone }=req.body;
    const sql = "insert into member  (userid  , pwd , name , email , phone) values(?, ?, ?, ?, ?)";
    try{
        const connection = await getConnection();
        const result = await connection.query(sql,[userid, pwd, name, email, phone]);
        if(result) res.send({msg:"회원가입에 성공했습니다."});
    }catch(err){
        console.error(err);
    }
});

router.post("/idcheck",async (req,res)=>{
    console.log(req.body);
  let {userid} = req.body;
  try{
    const sql = "select * from member where userid = ?";
    const connection = await getConnection();
    const [result] = await connection.query(sql , [userid]);
    console.log(result);
    res.send({"id" : result.userid });
  }catch(err){
    console.error(err);
  }
});

router.get("/logout", (req,res)=>{
    delete req.session[req.cookies.session];
    res.clearCookie("session",{httpOnly:true, path:"/"});
    res.redirect("/");
});

module.exports = router;