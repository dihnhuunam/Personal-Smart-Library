// const Sequelize = require('sequelize');

// const sequelize = require('../backend/server');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('library1', 'root', '213626',{
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
});

const User = sequelize.define('user', {
    UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    'Full Name': {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DoB: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
}, {
    tableName: 'user', 
    timestamps: false 
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
module.exports = User;