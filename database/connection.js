const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
});

const syncetables = () => {
    return sequelize.sync().then(result => {
        console.log("Connected to the database");
    }).catch(err => {
        console.log(err);
    });
};

module.exports = { sequelize, syncetables };
