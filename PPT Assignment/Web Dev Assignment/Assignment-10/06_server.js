const http = require('http');

const menProducts = [
  { id: 1, name: 'Men Product 1', category: 'Men', price: 20 },
  { id: 2, name: 'Men Product 2', category: 'Men', price: 30 },
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', category: 'Women', price: 25 },
  { id: 2, name: 'Women Product 2', category: 'Women', price: 35 },
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
