require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const rootes = require('./src/routes');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cors)
