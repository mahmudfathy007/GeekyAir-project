const express = require('express');
const BorrowingController = require('../../controllers/Borrowing.controller');

const BorrowingRoutes = express.Router();

BorrowingRoutes.post('/borrowBook', BorrowingController.createBorrowingProcess);

BorrowingRoutes.put('/returnBook/:id', BorrowingController.returnBook);

BorrowingRoutes.get('/getAllBorrowingsProcess', BorrowingController.getAllBorrowingsProcess);

BorrowingRoutes.get('/checkBorrowedProcessByUserId/:id', BorrowingController.checkBorrowedProcessByUserId);

BorrowingRoutes.get('/getAllBorrowingsProcessWhichDueDateIsPassed', BorrowingController.getAllBorrowingsProcessWhichDueDateIsPassed);

module.exports = BorrowingRoutes;

