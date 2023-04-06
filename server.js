let http = require('http')


http.createServer((req,res) => {
   
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello world')

}).listen(3000, (error)=> {
    if(error){
        console.log(error)
    }else{
        console.log('servidor rodando na porta 3000')
    }
})