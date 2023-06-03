const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { port, apiKey } = require("./config");

const app = express();

app.use(
    cors({
        origin: "https://fooddb-manager.herokuapp.com",
    })
);

// db
require("./db/mongoose");

// parser
app.use(bodyParser.json());

// middleware
app.use((req, res, next) => {
    if (req.query.apiKey !== apiKey) {
        res.sendStatus(401);
    }
    next();
});

// routes
const ingredientRouter = require("./routes/ingredientRoute");
app.use("/api/", ingredientRouter);

// server
app.listen(port, () => {
    console.log(`Server is running... http://localhost:${port}`);
});
