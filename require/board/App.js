const express=require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const multer = require("multer");
const app =express();
dotenv.config();

app.set("port",process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",express.static(path.join(__dirname,"public")));
app.use("/img",express.static(path.join(__dirname, "uploads")));

try{
    fs.readdirSync("uploads");
}catch(err){
    console.log("업로드 폴더가없어 생성합니다.");
    fs.mkdirSync("uploads");
}

const multerObj = multer({
    storage: multer.diskStorage({
        destination(req , file , done){
            done(null, "/uploads");
        },
        filename(req,file, done){
            let ext = path.extname(file.originalname);
            let fn = path.basename(file.originalname, ext)+Date.now()+ext;
            done(null, fn);
        }
    }),
    limits:{
        fileSize:1024*1024*5,
    }
});


app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false
    }
}));
// app.use((req,res,next)=>{
//     if(req.path !== "/" && req.path !== "/member/login" && !req.session[req.cookies.session]) res.redirect("/");
//     else {next();}
// });

const indexRouter = require("./Routers/");
const memberRouter = require("./Routers/member");
const boardRouter= require("./Routers/board");
app.use("/",indexRouter);
app.use("/member",memberRouter);
app.use("/board",boardRouter);


app.use((req,res,next)=>{
    res.status(404).send("404에러입니다.");
});

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(200).send("서버에러");
});

app.listen(app.get("port"),()=>{console.log(app.get("port") , "에서 포트 열림....");});