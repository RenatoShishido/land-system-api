const mongoose = require('mongoose')

const TerrenoSchema = new mongoose.Schema({
  valor: {
    type: String,
  },
  custo: {
    type: String,
  },
  local: {
    type: String,
  },
  status: {
    type: String,
    default: "Venda"
  },
  cliente: {
    nome: String,
    telefone: String,
    datapagamento: String,
    parcela: String,
    pagas: Number,
    total: String,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
}, {
  timestamps: true
});


const Terreno = mongoose.model("Terreno", TerrenoSchema)

module.exports = Terreno;