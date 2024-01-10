const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../database');

const User = sequelize.define("users", {
    'UserID': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    "Full Name": {
    type: DataTypes.STRING,
    allowNull: false
    },
    "Username": {
    type: DataTypes.STRING,
    allowNull: false
    },
    'Password': {
    type: DataTypes.STRING,
    allowNull: false
    },
    'Gender': {
      type: DataTypes.STRING,
      allowNull: false
    },
    "Dob": {
    type: DataTypes.DATE,
    }
}, {
  timestamps: false // Disable timestamps (createdAt and updatedAt)
});

sequelize.sync().then(() => {
  console.log('Users table created successfully!');
}).catch((error) => {
  console.error('Unable to create table: ', error);
});

module.exports = User;