const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');


const server2 = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello World')

}).listen(3000, (err)=> {
   if(err){console.log(err)}else{
    console.log('Servidor2 rodando na porta 3000')
   }
})