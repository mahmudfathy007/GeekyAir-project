const express = require('express');
const Book = require('../database/models/books.model');
const { Op } = require('sequelize');


const createBook = async (req, res) => {
    try {
        const { title, author, ISBN, availableQuantity, shelfLocation } = req.body;
        const book = new Book({ title, author, ISBN, availableQuantity, shelfLocation });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json(err);
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (err) {
        res.status(400).json(err);
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const existingBook = await Book.findByPk(id);
        if (!existingBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        return res.status(200).json(existingBook);
    } catch (err) {
        res.status(400).json(err);
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const existingBook = await Book.findByPk(id);
        if (!existingBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        const { title, author, ISBN, availableQuantity, shelfLocation } = req.body;
        const [updatedRows] = await Book.update(
            { title, author, ISBN, availableQuantity, shelfLocation },
            { where: { id } }
        );
        if (updatedRows === 0) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.status(200).json({ msg: 'Book updated successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.destroy({ where: { id } });
        if (!deletedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.status(200).json({ msg: 'Book deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
};

const searchBooks = async (req, res) => {
    try {
        const { title, author, ISBN } = req.body;

        // Validate that at least one search criteria is provided
        if (!title && !author && !ISBN) {
            return res.status(400).json({ msg: 'Please provide at least one search criteria (title, author, or ISBN)' });
        }

        // Build the search condition based on provided criteria
        const searchCondition = {
            [Op.or]: [
                title && { title: { [Op.iLike]: `%${title}%` } },
                author && { author: { [Op.iLike]: `%${author}%` } },
                ISBN && { ISBN: { [Op.iLike]: `%${ISBN}%` } },
            ].filter(Boolean), // Filter out falsy values (undefined) in case a criteria is not provided
        };

        // Search for books using the constructed condition
        const foundBooks = await Book.findAll({
            where: searchCondition,
        });

        if (foundBooks.length === 0) {
            return res.status(404).json({ msg: 'No books found matching the search criteria' });
        }

        res.status(200).json(foundBooks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBooks,
}