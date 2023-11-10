const express = require('express');
const BorrowerController = require('../../controllers/Borrower.controller');

const BorrowerRoutes = express.Router();

BorrowerRoutes.post('/createBorrower', BorrowerController.createBorrower);

BorrowerRoutes.get('/getAllBorrowers', BorrowerController.getAllBorrowers);

BorrowerRoutes.get('/getBorrower/:id', BorrowerController.getBorrowerById);

BorrowerRoutes.put('/updateBorrower/:id', BorrowerController.updateBorrower);

BorrowerRoutes.delete('/deleteBorrower/:id', BorrowerController.deleteBorrower);

module.exports = BorrowerRoutes;

