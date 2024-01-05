const Sequelize = require('sequelize');

const sequelize = new Sequelize('library1', 'root', '213626',{
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
});

const Author = sequelize.define('author', {
    AuthorID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FullName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: 'author', 
    timestamps: false 
});

sequelize.sync().then(() => {
    console.log('Author table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
module.exports = Author;