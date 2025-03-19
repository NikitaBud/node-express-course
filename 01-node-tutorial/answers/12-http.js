const http = require('http');
console.log('start...');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page')
    }
});

server.listen(3000);