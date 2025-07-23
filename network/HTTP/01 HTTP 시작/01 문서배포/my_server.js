const http = require("http");

const content = `HTTP Lecture
1. Basic
	1.1 HTTP Start
	1.2 HTTP Message
2. Web Browser
	1.1 Content Negotiation
	1.2 Cookie
`;

const handler = (req, res) => {
  res.write(content); // 클라이언트에게 데이터 전달
  res.end(); // 종료 응답
};

// server instance
const server = http.createServer(handler);

server.listen(3000, () => console.log("http://localhost:3000"));
