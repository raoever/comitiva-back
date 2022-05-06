const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {

    try {
        const {usuario, password} = req.body;
        console.log("dentro do post")
        if (!(usuario && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({usuario});
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user._id, usuario},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});

router.post('/cadastro', (req, res) => {
    const user = new User({
        usuario: req.body.usuario,
        password: req.body.password
    });

    user.save()
        .then(result => {
            console.log(result);
            res.send(user);
        })
        .catch(err => {
            console.log(err);
            res.send(user);
        });
});

module.exports = router;