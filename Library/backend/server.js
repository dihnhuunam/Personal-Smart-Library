// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('library1', 'root', '213626',{
//     dialect: 'mysql'
// });

// sequelize.authenticate().then(() => {
//     console.log("Connection successful");
// }).catch((err) => {
//     console.log("Error connecting to database");
// });

// console.log("Another task");

// module.exports = sequelize

const express = require('express');
const app  = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    user:'root',
    password:'', //empty for window
    database: 'library'
});

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

