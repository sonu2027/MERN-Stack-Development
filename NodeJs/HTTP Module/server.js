const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello! Sonu Mondal</h1>");
  } else if (req.url == "/about") {
    res.write("<h1>About Page</h1>");
  } else if (req.url == "/about/details") {
    res.write("<h1>Details</h1>");
  }
  res.end();
});
server.listen(5000);
console.log("server create successfully at port 5000");
