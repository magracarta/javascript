const express = require("express");
const path = require("path");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const dotevn = require("dotenv");

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

dotevn.config();
app.use(cookieparser());
app.use(session({ resave: false, saveUninitialized:false, secret:process.env.SESSION_SECRET}));

app.get("/",(req,res)=>{
    if(req.session[req.cookies.session]){
        res.send(`<h2>${req.session[req.cookies.session]} 님 반갑습니다. </h2> <a href="/logout">로그아웃</a>`)
    }else res.sendFile(path.join(__dirname,"./index.html"));
});
app.post("/login",(req,res)=>{
    const userid = req.body.userid;
    const pwd =req.body.pwd;
    if(userid=="scott" && pwd=="1234"){
        const uniquekey = Date.now();
        req.session[uniquekey] = userid;
        res.cookie('session', encodeURIComponent(uniquekey),({httpOnly:true, path:"/"}));
        res.json({msg:'ok'});

    }else if(userid != "scott"){
        res.json({msg:'없는 아이디입니다.'});
    }else if(pwd != "1234"){
        res.json({msg:"비밀번호가 틀립니다."})
    }
});

app.get("/logout",(req, res)=>{
    delete req.session[req.cookies.session];
    res.clearCookie("session",{httpOnly:true , path:"/"});
    res.redirect("/");
});

app.use((req,res,next)=>{
    res.status(404).send("404에러임~!");
});

app.listen(app.get("port"),()=>{
    console.log(app.get("port")+"포트 서버 오픈");
});
