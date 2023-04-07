let http = require('http')
const url = require('url')

http.createServer((req,res)=> {
    let path = url.parse(req.url);  
  res.end("oii")
}).listen(3000, (error) => {
    if (error){
        console.log(error)
    }else{
        console.log('servidor rodando na porta 3000')
    }
} )