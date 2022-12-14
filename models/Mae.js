const mongoose = require('mongoose');

const MaeSchema = mongoose.Schema({
    maeNome: String,
    maeNascimento: Date,
    maeTurma: String,
    maeOcupacao: String,
    maeContato: String
});

module.exports = mongoose.model('Mae', MaeSchema);
