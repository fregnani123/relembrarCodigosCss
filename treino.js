let args = process.argv.slice(2)



let a = Number(args[1])
let b = Number(args[2])
let c = "";

if (args[0]==="s"){
    c= soma(a,b)
}else if(args[0]==="m"){
    c= mult(a,b)
}else{
    c = 'opcão invalida'
}

function mult (x,y){
    return x*y
}

function soma (x,y){
    return x + y
}

console.log (c)