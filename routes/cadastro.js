const express = require('express');
const router = express.Router();
const Familia = require('../models/Familia');
const User = require('../models/User');

router.get("/", async (request, response) => {
    const familias = await Familia.find({});

    try {
        response.send(familias);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get('/familia/:id', async (req, res) => {
    await Familia.findById(req.params.id)
        .then(familia => {
            if (!familia) {
                return res.status(404).send();
            }
            console.log(familia);
            res.send(familia);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

router.delete('/familia/:id', async (req, res) => {
    await Familia.findByIdAndRemove(req.params.id)
        .then(familia => {
            if (!familia) {
                return res.status(404).send();
            }
            res.send(familia);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

router.delete('/familia/dependente/:idFamilia/:idDependente', async (req, res) => {
    await Familia.findByIdAndUpdate({_id: req.params.idFamilia}, {$pull: {dependentes: {_id: req.params.idDependente}}}, {new: true})
        .then(familia => {
            if (!familia) {
                return res.status(404).send();
            }

            res.send(familia);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

router.put('/familia/:id', async (req, res) => {
    await Familia.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((familia) => {
            if (!familia) {
                return res.status(404).send();
            }
            res.send(familia);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

router.post('/familia', (req, res) => {
    const familia = new Familia({
        endereco: req.body.endereco,
        paiNome: req.body.paiNome,
        paiNascimento: req.body.paiNascimento,
        paiTurma: req.body.paiTurma,
        paiOcupacao: req.body.paiOcupacao,
        paiContato: req.body.paiContato,
        maeNome: req.body.maeNome,
        maeNascimento: req.body.maeNascimento,
        maeTurma: req.body.maeTurma,
        maeOcupacao: req.body.maeOcupacao,
        maeContato: req.body.maeContato,
        dependentes: req.body.dependentes
    });

    familia.save()
        .then(result => {
            console.log(result);
            res.send(familia);
        })
        .catch(err => {
            console.log(err);
            res.send(familia);
        });
});

module.exports = router;