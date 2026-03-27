const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`);
    res.end('check terminal');
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
