const Sequelize = require('sequelize');

const sequelize = new Sequelize('library1', 'root', '213626',{
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
});

const Personal = sequelize.define('personal', {
    PersonalID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    'Library Name': {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: 'personal', 
    timestamps: false 
});

sequelize.sync().then(() => {
    console.log('Personal table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
module.exports = Personal;