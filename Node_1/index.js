const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

const fs = require('fs');
const file_readed = fs.readFileSync('main.txt', 'utf8');
console.log(file_readed);

const message = 'Hello from new-file.txt\n' + file_readed;

fs.writeFileSync('new_file.txt', message);