const express = require('express');
const cors = require('cors');
require('dotenv').config();

const moviesRoutes = require('./routes/movies.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/movies', moviesRoutes);

module.exports = app;
