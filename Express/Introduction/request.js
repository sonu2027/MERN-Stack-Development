// server-server (http.request())
const http = require("http");

const options={
  hostname:'fakestoreapi.cm',
  path:'/products/1',
  method:"get"
}

const apiRequest=http.request(options, (apiRes)=>{
  apiRes.on("data", (data)=>{
    console.log(data.toString());
  })
})

apiRequest.on("error", (e)=>{
  console.log("Error is: ",e);
})

apiRequest.end();

// URL- uniform resource locator

// https://www.example.com/home/about?q=term/#javascript

// https -> scheme/protocol
// www.example.com -> hostname
// www -> subdomain
// example -> domain
// com -> top-level-domain
// /home/about -> search
// ?q=term -> query string
// #javascript -> slug/resource
