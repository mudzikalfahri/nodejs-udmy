console.log("hello");
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("we got a new request");
});

server.listen(3000);
