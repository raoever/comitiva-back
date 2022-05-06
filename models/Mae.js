const mongoose = require('mongoose');

const MaeSchema = mongoose.Schema({
    nome: String,
    nascimento: Date,
    ocupacao: String,
    contato: String
});

module.exports = mongoose.model('Mae', MaeSchema);