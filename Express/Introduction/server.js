// Client-server
const http = require("http");

const port = 1000;
const host = "localhost";

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("content-type", "text/plain");
  // res.end();
  //   res.end("Node server created by sonu mondal");
  // res.end(JSON.stringify({ error: "server error" }));

  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Welcome to nodejs server by sonu mondal");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("About Page");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("contact page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "get",
    };

    const apiRequest = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("content-type", "application/JSON");
        res.end(data.toString());
      });
    });

    apiRequest.on("error", (e) => {
      console.log("Error is: ", e);
    });

    apiRequest.end();
  } else {
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Server Error!");
  }
});

server.listen(port, () => {
  console.log(`server running at ${host}:${port}`);
});
console.log("server created at port 1000");
