const faker = require('faker');
//const mysql= require('./database/mysql');
const mysql = require('mysql');

var connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'IKEA'
});
connection.connect(function(err) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log('connected');
});

function seed () {
  for(var i=0; i<100; i++) {
    var data = {};
    data.name = faker.commerce.product();
    data.description = faker.commerce.productDescription();
    data.price = faker.commerce.price();
    data.stock= faker.random.number();
    connection.query('INSERT INTO Products SET ?', data, function(err,data) {
      console.log(data);
    });
    var data2 = {};
    data2.name = faker.address.county();
    data2.address = faker.address.streetAddress();
    data2.zipcode = faker.address.zipCode();
    connection.query('INSERT INTO Stores SET ?', data2, function (err, data) {
      console.log(data);
    });
  }
}
//faker.commerce.product(), faker.commerce.productDescription(), faker.commerce.price()
//faker.commerce.department(), faker.address.streetAddress(), faker.address.zipCode()
seed();
module.exports.seed = seed;