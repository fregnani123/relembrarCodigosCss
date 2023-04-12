// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, '')))

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server runing on Port ${PORT}`) }
// )


// const args = process.argv.slice(2)

// let a = Number(args[0])
// let b = Number(args[1])
// let c = (a * b) / 100

// console.log('O desconto é de R$' + c)

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url);
//   if (pathname === '/') {
//     fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.write('Erro interno do servidor');
//         res.end();
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (pathname.endsWith('.css')) {
//     const cssPath = path.join(__dirname, pathname);
//     fs.readFile(cssPath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.write('Erro interno do servidor');
//         res.end();
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/css' });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (pathname.endsWith('.js')) {
//     const jsPath = path.join(__dirname, pathname);
//     fs.readFile(jsPath, (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.write('Erro interno do servidor');
//         res.end();
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/javascript' });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.write('Página não encontrada');
//     res.end();
//   }
// }).listen(3000, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Servidor rodando na posta 3000');
//   }
// });