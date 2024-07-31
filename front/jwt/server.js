require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const routes = require('./src/routes');

//Middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('axios')); // Caso queira servir arquivos estáticos da pasta 'axios'
app.use(routes);

app.listen(PORT, () => { console.log("API de OSs respondendo na porta " + PORT) });