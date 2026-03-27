const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
        res.end(fs.readFileSync('index.html'));     
   } else if (req.url === '/about') {
        res.end(fs.readFileSync('about.html'));     
   } else if (req.url === '/contact-me') {
        res.end(fs.readFileSync('contact-me.html'));     
   } else {
        res.end(fs.readFileSync('404.html'));
   }
});

server.listen(8080);