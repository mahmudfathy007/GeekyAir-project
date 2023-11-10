const express = require('express');
const Borrower = require('../database/models/borrowers.model');

const createBorrower = async (req, res) => {
    try {
        const { username, name, email } = req.body;
        const borrower = new Borrower({ username, name, email });
        await borrower.save();
        res.status(201).json(borrower);
    } catch (err) {
        res.status(400).json(err);
    }
};

const getAllBorrowers = async (req, res) => {
    try {
        const borrowers = await Borrower.findAll();
        res.status(200).json(borrowers);
    } catch (err) {
        res.status(400).json(err);
    }
};

const getBorrowerById = async (req, res) => {
    try {
        const { id } = req.params;
        const existingBorrower = await Borrower.findByPk(id);
        if (!existingBorrower) {
            return res.status(404).json({ msg: 'Borrower not found' });
        }
        return res.status(200).json(existingBorrower);
    } catch (err) {
        res.status(400).json(err);
    }
};

const updateBorrower = async (req, res) => {
    try {
        const { id } = req.params;
        const existingBorrower = await Borrower.findByPk(id);
        if (!existingBorrower) {
            return res.status(404).json({ msg: 'Borrower not found' });
        }
        const { username, name, email } = req.body;
        const [updatedRows] = await Borrower.update(
            { username, name, email },
            { where: { id } }
        );
        if (updatedRows === 0) {
            return res.status(404).json({ msg: 'Borrower not found' });
        }
        res.status(200).json({ msg: 'Borrower updated successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
};

const deleteBorrower = async (req, res) => {
    try {
        const { id } = req.params;
        const existingBorrower = await Borrower.findByPk(id);
        if (!existingBorrower) {
            return res.status(404).json({ msg: 'Borrower not found' });
        }
        const deletedRows = await Borrower.destroy({ where: { id } });
        if (deletedRows === 0) {
            return res.status(404).json({ msg: 'Borrower not found' });
        }
        res.status(200).json({ msg: 'Borrower deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createBorrower,
    getAllBorrowers,
    getBorrowerById,
    updateBorrower,
    deleteBorrower,
};
