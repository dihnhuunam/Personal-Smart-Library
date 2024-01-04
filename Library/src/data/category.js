const Sequelize = require('sequelize');

const sequelize = new Sequelize('library1', 'root', '213626',{
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
});

const Category = sequelize.define('category', {
    CategoryID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
      'Category Name': {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    tableName: 'category', 
    timestamps: false 
});

sequelize.sync().then(() => {
    console.log('Category table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
module.exports = Category;