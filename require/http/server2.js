const http = require("http");
const fs = require("fs").promises;

http.createServer(async (req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            try {
                const data = await fs.readFile("./index.html");
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(data);
            } catch (err) {
                res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                res.end("파일을 읽는 도중 오류가 발생했습니다.");
            }
        }
    } else if (req.method === "POST") {
        if (req.url === "/user") {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    let { userid } = JSON.parse(body);
                    console.log(userid);
                    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
                    res.end(JSON.stringify({ message: "User ID received", userid: userid }));
                } catch (err) {
                    res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
                    res.end(JSON.stringify({ message: "Invalid JSON" }));
                }
            });
        }
    }
}).listen(3000, () => {
    console.log("3000포트에서 서버가 대기중");
});
