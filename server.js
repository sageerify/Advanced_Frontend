const express = require('express');
const path = require('path');

let intial_path = path.join (__dirname, "public");

const app = express();
app.use(express.stats(initial_path));
