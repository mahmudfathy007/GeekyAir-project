const express = require('express');
const BookController = require('../../controllers/books.controller');

const BookRoutes = express.Router();

BookRoutes.post('/createBook', BookController.createBook);

BookRoutes.get('/getAllBooks', BookController.getAllBooks);

BookRoutes.get('/getBook/:id', BookController.getBookById);

BookRoutes.put('/updateBook/:id', BookController.updateBook);

BookRoutes.delete('/deleteBook/:id', BookController.deleteBook);

BookRoutes.get('/searchBooks', BookController.searchBooks);

module.exports = BookRoutes;

