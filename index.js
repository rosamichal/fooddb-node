const express = require('express');
const app = express();
const{ port } = require('./config');

// server
app.listen(port, () => {console.log(`Server is running... http://localhost:${port}`);});