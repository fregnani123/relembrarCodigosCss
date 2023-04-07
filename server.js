let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');


http.createServer((req,res) => {
path = url.parse(req.url).pathname;

let fileName = "." + path;

fs.readFile(fileName, (err, data) => {
    if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('Página não encontrada');
    }else{
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data);
        res.end()
    }
})

 res.end()

}).listen(3000, (error) =>  {
    if(error){
        console.log(error)
    }else{
        console.log('Servidor rodando na porta 3000')
    }
})