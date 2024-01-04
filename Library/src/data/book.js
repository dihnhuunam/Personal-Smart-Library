const Sequelize = require('sequelize');

const sequelize = new Sequelize('library1', 'root', '213626',{
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
});

const Book = sequelize.define('book', {
    BookID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      'Publication Date': {
        type: Sequelize.DATE,
        allowNull: true
      },
}, {
    tableName: 'book', 
    timestamps: false 
});

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
module.exports = Book;