// Step 1: Load the 'http' module
const http = require('http');

// Step 2: Create an HTTP server
const server = http.createServer((req, res) => {
  // Step 3: Check if the request method is GET and the URL is /hello/amjad
  if (req.method === 'GET' && req.url === '/hello/amjad') {
    // Step 4: Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Step 5: Send the response body
    res.end('Hello, Amjad');
  } else {
    // Handle other routes or methods
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Step 6: Set the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
