const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../database');

const Personal = sequelize.define("personal libraries", {
    'PersonalID': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    "Name of library": {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
  timestamps: false // Disable timestamps (createdAt and updatedAt)
});

sequelize.sync().then(() => {
  console.log('Users table created successfully!');
}).catch((error) => {
  console.error('Unable to create table: ', error);
});

module.exports = Personal;