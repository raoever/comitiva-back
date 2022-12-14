const mongoose = require('mongoose');

onst PaiSchema = mongoose.Schema({
    paiNome: String,
    paiNascimento: Date,
    paiTurma: String,
    paiOcupacao: String,
    paiContato: String
});

module.exports = mongoose.model('Pai', PaiSchema);
