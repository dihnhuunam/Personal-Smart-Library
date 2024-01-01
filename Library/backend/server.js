const Sequelize = require('sequelize');

const sequelize = new Sequelize('library', 'root', '213626',{
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
});

console.log("Another task");


