require('newrelic');
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Hello World\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
