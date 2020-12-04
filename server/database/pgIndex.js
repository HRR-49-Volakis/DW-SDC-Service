const { Pool, Client } = require('pg');

const connectionString = `postgres://dw:sweetbbj@localhost:5432/ikea`;

const pool = new Pool({
  connectionString
});

const client = new Client({
  connectionString
});

client.connect();
console.log('successful connection to postgres DB');

//create
var addProduct = async function (name, description, price, review, callback) {
  await pool.query(`INSERT INTO Products (name, description, price, review) VALUES ('${name}', '${description}', ${price}, ${review})`, function(err,data) {
    callback(err,data);
  });
}
var addStore = async function (name, address, zipcode, stock, callback) {
  await pool.query(`INSERT INTO Stores (name, address, zipcode, stock) VALUES ('${name}', $$${address}$$, ${zipcode}, ${stock})`, function(err,data) {
    callback(err,data);
  });
}

//read
var getProduct = function (id, callback) {
  pool.query("SELECT name, description, price, review FROM Products WHERE id='" + id + "' LIMIT 1;", function(err, data) {
    callback(err,data);
  });
};
var getProducts = function (callback) {
  pool.query("SELECT * FROM Products", function(err, data) {
    callback(err,data);
  });
};
var getStore = function (zip, callback) {
  pool.query("SELECT name, address, zipcode, stock FROM Stores WHERE zipcode='"+ zip + "';", function(err, data) {
    callback(err,data);
  });
};
var getStores = function (callback) {
  pool.query("SELECT * FROM Stores LIMIT 10;", function(err, data) {
    callback(err, data);
  });
};

//update
const updateProduct = (id, property, newVal, callback) => {
  console.log('newval', newVal)
  pool.query(`UPDATE Products SET ${property} = ${newVal} WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
};
const updateStore = (id, property, newVal, callback) => {
  pool.query(`UPDATE Stores SET ${property} = ${newVal} WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
};

//delete
const deleteProduct = (id, callback) => {
  pool.query(`DELETE FROM Products WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
}

const deleteStore = (id, callback) => {
  pool.query(`DELETE FROM Stores WHERE id = ${id}`, (err, data) => {
    callback(err, data);
  });
}

module.exports = {
  addProduct: addProduct,
  addStore: addStore,
  getProduct: getProduct,
  getProducts: getProducts,
  getStore: getStore,
  getStores: getStores,
  updateProduct: updateProduct,
  updateStore: updateStore,
  deleteProduct: deleteProduct,
  deleteStore: deleteStore
};