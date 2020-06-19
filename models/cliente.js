const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
nome: {
  type: String,
},
telefone: {
  type: String,
},
localizacao: {
  type: String,
},
parcela: {
  type: Number,
},
data : {
    type: Date,
    default: Date.now(),
},
});


const Cliente = mongoose.model("Cliente" , ClienteSchema)

module.exports = Cliente;

















