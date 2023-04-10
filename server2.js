const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');


http.createServer((req,res)=>{
  
    const{ pathname } = url.parse(req.url)

    res.end()

}).listen(3000,(err)=> {
    if(err){
        console.log(err)}else{
            console.log('Servidor rodando na porta 3000')
        }
    }
)