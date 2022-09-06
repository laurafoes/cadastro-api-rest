const http = require("http");
const port = 3000;

const rotas = {
    "/": 'Aplicativo back-end',
    "/api/v1/users": 'Mostra users',
    "/api/v1/users/:id": 'Mostra por id',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})