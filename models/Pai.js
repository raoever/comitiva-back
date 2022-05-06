const mongoose = require('mongoose');

const PaiSchema = mongoose.Schema({
    nomePai: String,
    nascimentoPai: Date,
    ocupacaoPai: String,
    contatoPai: String
});

module.exports = mongoose.model('Pai', PaiSchema);