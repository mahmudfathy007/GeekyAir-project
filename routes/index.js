const express = require('express');
const routes = express.Router();

const BorrowerRoutes = require('./api/Borrower.route');

routes.use('/borrower', BorrowerRoutes);

module.exports = routes;
