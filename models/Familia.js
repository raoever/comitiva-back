const mongoose = require('mongoose');

const FamiliaSchema = mongoose.Schema({
    endereco: String,
    paiNome: String,
    paiNascimento: Date,
    paiTurma: String,
    paiOcupacao: String,
    paiContato: String,
    maeNome: String,
    maeNascimento: Date,
    maeTurma: String,
    maeOcupacao: String,
    maeContato: String,
    dependentes: [{
        nomeDependente: String,
        parentesco: String,
        nascimentoDependente: Date,
        turmaDependente: String,
        estuda: String,
        escolaridade: String,
        tamanhoPe: String,
        tamanhoCalca: String,
        tamanhoCamisa: String
    }]
});

module.exports = mongoose.model('Familia', FamiliaSchema);
