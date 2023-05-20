const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(
    "Oops! We can't seem to find the page you are looking for. <a href='/'>Back home</a>"
  );
});

server.listen(5000);
