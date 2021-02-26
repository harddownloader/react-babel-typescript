require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routing');

const {
  PORT,
} = process.env;

const app = express();
const DIST_DIR = path.join(__dirname, '../dist'); // NEW

app.use(express.static('public'));
app.use('/', express.static(DIST_DIR));

app.listen(PORT, () => {
  console.info(`App listening on port:${PORT}`);
});