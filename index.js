const express = require('express');
const app = express();
const{ port } = require('./config');
var bodyParser = require('body-parser');

// db
require('./db/mongoose');

// parser
app.use(bodyParser.json());

// routes
const ingredientRouter = require('./routes/ingredientRoute');
app.use('/api/', ingredientRouter);

// server
app.listen(port, () => {console.log(`Server is running... http://localhost:${port}`);});