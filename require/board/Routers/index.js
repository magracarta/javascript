const express = require("express");
const router = express.Router();
const path = require("path");
const mysql = require("mysql2/promise");

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/..","/views/loginForm.html"));
});


module.exports = router;