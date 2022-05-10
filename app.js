const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cadastroRoute = require('./routes/cadastro.js');
const loginRoute = require('./routes/login.js');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 3001;



app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/cadastro", cadastroRoute);
app.use("/login", loginRoute);

mongoose.connect(process.env.DB_CONNECTION,
    () => console.log(`DB Conectado na porta ${PORT}`));

// () => console.log(`DB Conectado na porta ${PORT}`

app.listen(PORT);

