// borrowedBookModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../connection').sequelize;
const Book = require('./books.model');
const Borrower = require('./borrowers.model');

const BorrowingProcess = sequelize.define('borrowingProcess', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Book,
            key: 'id'
        }
    },
    BorrowerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Borrower,
            key: 'id'
        }
    },
    borrowedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    returnedDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false // Disable timestamps
});

BorrowingProcess.belongsTo(Book, { foreignKey: 'BookId', as: 'BookAssociation' });
BorrowingProcess.belongsTo(Borrower, { foreignKey: 'BorrowerId', as: 'BorrowerAssociation' });

module.exports = BorrowingProcess;
