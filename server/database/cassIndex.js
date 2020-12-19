const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'ikea'
});

client.connect().then(console.log('connected to cassie'));


//create
const addProduct = async function (name, description, price, review, callback) {
  const query = `INSERT INTO Products (id, name, description, price, review) VALUES ( dateof(now()),'${name}', '${description}', ${price}, ${review})`;
  client.execute(query, function(err,data) {
    callback(err,data);
  });
}

var addStore = async function (name, address, zipcode, stock, callback) {
  zipcode = Number.parseInt(zipcode.slice(0,5));
  let query = `INSERT INTO Stores (id, name, address, zipcode, stock) VALUES (toUnixTimestamp(now()), '${name}', $$${address}$$, ${zipcode}, ${stock})`;
  client.execute(query, function(err,data) {
    callback(err,data);
  });
}

//read
var getProduct = function (name, callback) {
  let query = "SELECT * FROM Products WHERE name='" + name + "' LIMIT 1;"
  client.execute(query, function(err,data) {
    callback(err,data);
  });
};
var getProducts = function (callback) {
  let query = "SELECT * FROM Products;";
  client.execute(query, function(err,data) {
    callback(err,data);
  });
};
var getStore = function (zip, callback) {
  let zipcode =  Number.parseInt(zip);
  let query = "SELECT * FROM Stores WHERE zipcode="+ zipcode + " LIMIT 1;"
  client.execute(query, function(err,data) {
    callback(err,data);
  });
};
var getStores = function (callback) {
  let query = "SELECT * FROM Stores;";
  client.execute(query, function(err,data) {
    callback(err,data);
  });
};

//update
const updateProduct = (id, name, property, newVal, callback) => {
  console.log(id)
  id = id.slice(1, id.length -2)
  console.log(id)
  let stamp = Date.parse(id);
  console.log(stamp);
  console.log('newval', newVal)
  let query = `UPDATE Products SET ${property} = ${newVal} WHERE name = '${name}' AND id = ${stamp}`;
  client.execute(query, function(err,data) {
    callback(err,data);
  });
};

const updateStore = (id, zip, property, newVal, callback) => {
  console.log(id)
  id = id.slice(1, id.length -2)
  console.log(id)
  let stamp = Date.parse(id);
  console.log(stamp);
  console.log('newval', newVal)
  let query = `UPDATE Stores SET ${property} = ${newVal} WHERE zipcode = ${zip} AND id = ${stamp}`;
  client.execute(query, function(err,data) {
    callback(err,data);
  });
};

//delete
const deleteProduct = (id, name, callback) => {
  id = id.slice(1, id.length -2);
  let stamp = Date.parse(id);
  pool.query(`DELETE FROM Products WHERE name = '${name}' AND id = ${stamp}`, (err, data) => {
    callback(err, data);
  });
}

const deleteStore = (id, zip, callback) => {
  id = id.slice(1, id.length -2);
  let stamp = Date.parse(id);
  pool.query(`DELETE FROM Stores WHERE zipcode = ${zip} AND id = ${stamp}`, (err, data) => {
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