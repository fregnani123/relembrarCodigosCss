const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Erro interno do servidor');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (pathname.endsWith('.css')) {
    const cssPath = path.join(__dirname, pathname);
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Erro interno do servidor');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
      }
    });
  } else if (pathname.endsWith('.js')) {
    const jsPath = path.join(__dirname, pathname);
    fs.readFile(jsPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Erro interno do servidor');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Página não encontrada');
    res.end();
  }
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Servidor rodando na posta 3000');
  }
});
