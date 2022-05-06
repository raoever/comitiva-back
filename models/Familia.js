const mongoose = require('mongoose');

const FamiliaSchema = mongoose.Schema({
    endereco: String,
    outro: String,
    pai: {
        nomePai: String,
        nascimentoPai: Date,
        turmaPai: String,
        ocupacaoPai: String,
        contatoPai: String
    },
    mae: {
        nomeMae: String,
        nascimentoMae: Date,
        turmaMae: String,
        ocupacaoMae: String,
        contatoMae: String
    },
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