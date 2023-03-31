(async ()=> {
    const database = require('./db');
    const Produto = require('./produtos')
    await database.sync();

 const novoProduto = await Produto.create({
   nome: "Caneta Azul",
   preco: 2.5,
   descricao: 'caneta azul'
 })
})();