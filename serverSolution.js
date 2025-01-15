const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using setTimeout to avoid blocking the event loop
  console.log('Request received');
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
    console.log('Response sent');
  }, 5000); // Simulate a 5-second delay
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});