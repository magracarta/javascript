const fs = require("fs").promises;

async function writeReadFile(path){
   try{
        await fs.writeFile(path,"테스트 텍스트가 쓰여집니다.");
        const result = await fs.readFile(path);
        console.log(result.toString());
   }catch(err){
        console.error(err);
   }
}

writeReadFile("./test.txt");

