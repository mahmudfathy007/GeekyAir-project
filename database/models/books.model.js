const sequelize = require('../connection').sequelize;
const DataTypes = require('sequelize');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    availableQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    shelfLocation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Book;
