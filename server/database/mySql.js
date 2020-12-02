const mysql = require('mysql');
var connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'IKEA'
});
connection.connect(function(err) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log('connected');
});

//create
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

//read
var getProduct = function (id, callback) {
  connection.query("SELECT name, description, price, review FROM Products WHERE id='" + id + "' LIMIT 1;", function(err, data) {
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

//update
const updateProduct = (id, property, newVal, callback) => {
  connection.query(`UPDATE Products SET ${property} = ${newVal} WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
}

const updateStore = (id, property, newVal, callback) => {
  connection.query(`UPDATE Stores SET ${property} = ${newVal} WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
}

//delete
const deleteProduct = (id, callback) => {
  connection.query(`DELETE FROM Products WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
}

const deleteStore = (id, callback) => {
  connection.query(`DELETE FROM Stores WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
}


module.exports.getProduct = getProduct;
module.exports.getStore = getStore;
module.exports.getStores = getStores;
module.exports.addProduct = addProduct;
module.exports.addStore = addStore;
module.exports.updateProduct = updateProduct;
module.exports.updateStore = updateStore;
module.exports.deleteProduct = deleteProduct;
module.exports.deleteStore = deleteStore;