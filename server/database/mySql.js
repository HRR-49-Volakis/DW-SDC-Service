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
var getProduct = function (id, callback) {
  connection.query("SELECT name, description, price FROM Products WHERE id='" + id + "' LIMIT 1;", function(err, data) {
    callback(err,data);
  });
};
var getProducts = function (name, callback) {
  connection.query("SELECT * FROM Products", function(err, data) {
    console.log(data);
  });
};
var getStore = function (name, callback) {
  connection.query("SELECT name, address, zipcode, stock FROM Stores WHERE zipcode='"+ zip + "';", function(err, data) {
    callback(err,data);
  });
};
var getStores = function (callback) {
  connection.query("SELECT * FROM Stores LIMIT 10;", function(err, data) {
    callback(err, data);
  });
};
var addProduct = async function (name, description, price) {
  console.log(name);
  var data = {name: name, description: description, price: price};
  connection.query('INSERT INTO Products SET ?', data, function(err,data) {
    console.log(data);
  });
}
var addStore = async function (name, address, zipcode) {
  var data = {name: name, address: address, zipcode: zipcode};
  connection.query('INSERT INTO Stores SET ?', data, function (err, data) {
    console.log(data);
  });
}

module.exports.getProduct = getProduct;
module.exports.getStore = getStore;
module.exports.getStores = getStores;
module.exports.addProduct = addProduct;
module.exports.addStore = addStore;