let args = process.argv.slice(2)
let somaMult = require('./args')


let a = Number(args[1])
let b = Number(args[2])
let c = "";

if (args[0]==="s"){
    c= somaMult.soma(a,b)
}else if(args[0]==="m"){
    c= somaMult.mult(a,b)
}else{
    c = 'opcão invalida'
}



console.log (c)