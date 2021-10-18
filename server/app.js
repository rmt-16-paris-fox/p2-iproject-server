const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app routes
app.use("/", routes);

// error handling
app.use(errorHandler);

module.exports = app;
