const http = require('http');
console.log('start...');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `)
    }
});

server.listen(3000);