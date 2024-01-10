const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../database');

const Book = sequelize.define("books", {
    'BookID': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    "Category": {
    type: DataTypes.STRING,
    allowNull: false
    },
    'Title': {
    type: DataTypes.STRING,
    allowNull: false
    },
    'Author': {
    type: DataTypes.STRING,
    allowNull: false
    },
    "Publication Date": {
    type: DataTypes.DATE,
    },
    "Page count": {
      type: DataTypes.INTEGER,
      }
}, {
  timestamps: false // Disable timestamps (createdAt and updatedAt)
});

sequelize.sync().then(() => {
  console.log('Users table created successfully!');
}).catch((error) => {
  console.error('Unable to create table: ', error);
});

module.exports = Book;