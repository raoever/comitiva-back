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
        pai: req.body.pai,
        mae: req.body.mae,
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