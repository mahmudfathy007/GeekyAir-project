const BorrowingProcess = require('../database/models/borrwedBooks.model');
const Books = require('../database/models/books.model');
const Borrowers = require('../database/models/borrowers.model');
const { Op } = require('sequelize');

const createBorrowingProcess = async (req, res) => {
    try {
        const { Book, Borrower, dueDate } = req.body;

        // Check if the book exists
        const existingBook = await Books.findByPk(Book);
        if (!existingBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Check if the borrower exists
        const existingBorrower = await Borrowers.findByPk(Borrower);
        if (!existingBorrower) {
            return res.status(404).json({ msg: 'Borrower not found' });
        }

        // Check if the dueDate is upcoming (ignoring the time part)
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set the time to midnight

        const dueDateMidnight = new Date(dueDate);
        dueDateMidnight.setHours(0, 0, 0, 0); // Set the time to midnight for dueDate

        if (dueDateMidnight < today) {
            return res.status(400).json({ msg: 'Due date is not valid' });
        }

        // Check if the book is available
        const availableQuantity = existingBook.availableQuantity;
        if (availableQuantity === 0) {
            return res.status(400).json({ msg: 'Book is not available' });
        }

        // Create a new borrowingProcess instance
        const borrowingProcess = await BorrowingProcess.create({
            BookId: Book,
            BorrowerId: Borrower,
            dueDate: dueDate
            // Include other fields based on your model
        });

        // Update the available quantity of the book
        const updatedAvailableQuantity = availableQuantity - 1;
        await Books.update(
            { availableQuantity: updatedAvailableQuantity },
            { where: { id: Book } }
        );

        return res.status(201).json(borrowingProcess);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Error creating borrowing process' });
    }
};

const returnBook = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the borrowing process exists
        const existingBorrowingProcess = await BorrowingProcess.findByPk(id);
        if (!existingBorrowingProcess) {
            return res.status(404).json({ msg: 'Borrowing process not found' });
        }

        // Update the borrowing process
        const borrowingProcess = await BorrowingProcess.update(
            { returnedDate: new Date() },
            { where: { id: id } }
        );

        // Update the available quantity of the book
        const existingBook = await Books.findByPk(existingBorrowingProcess.BookId);
        const updatedAvailableQuantity = existingBook.availableQuantity + 1;
        await Books.update(
            { availableQuantity: updatedAvailableQuantity },
            { where: { id: existingBorrowingProcess.BookId } }
        );

        return res.status(200).json(borrowingProcess);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Error returning book' });
    }
};

const getAllBorrowingsProcess = async (req, res) => {
    try {
        const borrowingProcess = await BorrowingProcess.findAll({});

        return res.status(200).json(borrowingProcess);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Error getting all borrowing process' });
    }
};

const checkBorrowedProcessByUserId = async (req, res) => {
    try {
        const { id } = req.params;

        const borrowingProcess = await BorrowingProcess.findAll({
            where: { BorrowerId: id }
        });

        return res.status(200).json(borrowingProcess);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Error getting all borrowing process' });
    }
};

const getAllBorrowingsProcessWhichDueDateIsPassed = async (req, res) => {
    try {
        const borrowingProcess = await BorrowingProcess.findAll({
            where: {
                dueDate: { [Op.lt]: new Date() },
                returnedDate: null
            }
        });

        return res.status(200).json(borrowingProcess);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Error getting all borrowing process' });
    }
};


module.exports = {
    createBorrowingProcess,
    returnBook,
    getAllBorrowingsProcess,
    checkBorrowedProcessByUserId,
    getAllBorrowingsProcessWhichDueDateIsPassed
}