const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { port } = require('./config');

const app = express();

app.use(cors())

// db
require('./db/mongoose');

// parser
app.use(bodyParser.json());

// routes
const ingredientRouter = require('./routes/ingredientRoute');
app.use('/api/', ingredientRouter);

// server
app.listen(port, () => { console.log(`Server is running... http://localhost:${port}`); });