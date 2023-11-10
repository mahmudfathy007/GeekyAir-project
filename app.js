const express = require('express');
const { sequelize, syncetables } = require('./database/connection');
const errorHandler = require('./middlewares/error');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

syncetables();

app.use(express.json());

// api route
app.use('/api', routes);

// error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
