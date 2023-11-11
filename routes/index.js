const express = require('express');
const routes = express.Router();

const BorrowerRoutes = require('./api/Borrower.route');
const BookRoutes = require('./api/book.route');
const BorrowingRoutes = require('./api/borrowing.route');

routes.use('/borrower', BorrowerRoutes);
routes.use('/book', BookRoutes);
routes.use('/borrowing', BorrowingRoutes);

module.exports = routes;
