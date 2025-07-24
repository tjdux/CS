const http = require("http");
const path = require("path");
const fs = require("fs");

const static = (req, res) => {
  const filepath = path.join(__dirname, "public", req.url); //req.url = 파일이름

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.write("Not Found\n");
      res.end();
      return;
    }

    res.write(data);
    res.end();
  });
};

const handler = (req, res) => static(req, res);

// server instance
const server = http.createServer(handler);

server.listen(3000, () => console.log("http://localhost:3000"));
