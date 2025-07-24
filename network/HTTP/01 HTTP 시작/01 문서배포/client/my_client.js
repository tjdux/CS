const http = require("http");

const url = process.argv[2];

if (!url) {
  console.log("Usage: node my-client <url>");
  process.exit();
}

const options = new URL(url);

// 응답 핸들러
const handler = (res) => {
  const data = [];

  res.on("data", (chunk) => {
    data.push(chunk.toString());
  });

  res.on("end", () => {
    console.log(data.join(""));
  });
};

const req = http.request(options, handler);

req.end();

// node 01\ HTTP\ 시작/01\ 문서배포/client/my_client.js
// -> Usage: node my-client <url>

// $ node 01\ HTTP\ 시작/01\ 문서배포/client/my_client.js http://localhost:3000/ch01.txt
// HTTP Lecture
// 1. Basic
//         1.1 HTTP Start
//         1.2 HTTP Message
// 2. Web Browser
//         1.1 Content Negotiation
//         1.2 Cookie

//$ node 01\ HTTP\ 시작/01\ 문서배포/client/my_client.js http://l$ node 01\ HTTP\ 시작/01\ 문서배포/client/my_client.js http://localhost:3000/ch03.txt
//Not Found
