// Using fs module

const fs = require("fs");

// Writing to a file nodejs_architecture.txt
fs.writeFileSync(
  "nodejs_architecture.txt",
  "Node.js is an open-source, cross-platform JavaScript runtime environment that enables the execution of JavaScript code server-side."
)

// Reading from a file nodejs_architecture.txt and printing it on console
let data = fs.readFileSync("nodejs_architecture.txt");
console.log("Data: ", data.toString());

// Appending the file nodejs_architecture.txt and adding advantage of node js on it and then we will print the content of nodejs_architecture.txt
fs.appendFileSync(
  "nodejs_architecture.txt",
  "\n\n Advantages:\n In short, Node.js offers advantages such as asynchronous, non-blocking architecture for handling concurrent connections efficiently, unifying client-side and server-side JavaScript development, a robust package manager (NPM), fast execution with the V8 engine, scalability, a vibrant community, cross-platform compatibility, real-time capabilities, suitability for microservices, and strong corporate support."
)
data = fs.readFileSync("nodejs_architecture.txt");
console.log("Data: ", data.toString());

// Deleteing the nodejs_architecture.txt file
const err = fs.unlinkSync("nodejs_architecture.txt");
if (err) {
  console.log("Error comes: ", output);
} else {
  console.log("File nodejs_architecture.txt deleted successfuly");
}