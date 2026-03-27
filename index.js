const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
        res.end('Welcome to the Home Page');
   } else if (req.url === '/about') {
        res.end('Welcome to the About Page');
   } else if (req.url === '/contact-me') {
        res.end('Welcome to the Contact Page');
   } else {
         
        res.end('404 - Page Not Found');
   }
});

server.listen(8080);