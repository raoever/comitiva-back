const mongoose = require('mongoose');

const FamiliaSchema = mongoose.Schema({
    endereco: String,
    paiNome: String,
    paiNascimento: String,
    paiTurma: String,
    paiOcupacao: String,
    paiContato: String,
    maeNome: String,
    maeNascimento: String,
    maeTurma: String,
    maeOcupacao: String,
    maeContato: String,
    dependentes: [{
        dependenteNome: String,
        dependenteNascimento: String,
        dependenteParentesco: String,
        dependenteTurma: String,
        dependenteContato: String,
        estuda: String,
        escolaridade: String,
        tamanhoPe: String,
        tamanhoCalca: String,
        tamanhoCamisa: String
    }]
});

module.exports = mongoose.model('Familia', FamiliaSchema);
