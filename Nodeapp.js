
const {createServer} = require('http');

let server = createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "texto/html"});

    res.write(`<h1>Meu primeiro servidor com NodeJS</h1>`);

    res.end();
});

server.listen(8000);

console.log("Servidor rodando na porta 8000");


