const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello</title><head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>users</title><head>");
    res.write("<body>user1</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      res.statusCode = 302;
      res.setHeader("Location", "/");
      console.log(user);
      res.write(`<div>${user}</div>`);
      res.end();
    });
  }
};

module.exports = reqHandler;
