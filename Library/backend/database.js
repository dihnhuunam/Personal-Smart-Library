const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize


//test connect

// const database = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// database()
// module.exports = database