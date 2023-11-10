const express = require('express');
const routes = express.Router();

const BorrowerRoutes = require('./api/Borrower.route');
const BookRoutes = require('./api/book.route');

routes.use('/borrower', BorrowerRoutes);
routes.use('/book', BookRoutes);

module.exports = routes;
