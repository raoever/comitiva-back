const mongoose = require('mongoose');

const DependenteSchema = mongoose.Schema({
    dependenteNome: String,
    dependenteNascimento: String,
    dependenteParentesco: String,
    dependenteTurma: String,
    dependenteContato: String,
    estuda: Booleanm,
    escolaridade: String,
    tamanhoPe: String,
    tamanhoCamisa: String,
    tamanhoCalca: String
});

module.exports = mongoose.model('Dependente', DependenteSchema);
