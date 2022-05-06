const mongoose = require('mongoose');

const DependenteSchema = mongoose.Schema({
    nome: String,
    parentesco: String,
    nascimento: Date,
    estuda: Booleanm,
    escolaridade: String,
    tamanhoPe: String,
    tamanhoCamisa: String,
    tamanhoCalca: String
});

module.exports = mongoose.model('Dependente', DependenteSchema);