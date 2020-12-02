const express = require('express');
const mysql = require('./database/mySql.js');
let app = express();
app.use(express.static('client/dist'));

//create

app.post('/api/Bag/product', (req, res) => {
  let name = req.headers.name;
  let description = req.headers.description;
  let price = req.headers.price;
  mysql.addProduct(name, description, price, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('product added', data);
      res.send(data);
    }
  });
});
app.post('/api/Bag/store', (req, res) => {
  let name = req.headers.name;
  let address = req.headers.address;
  let zip = req.headers.zip;

  mysql.addStore(name, address, zip, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('store added', data);
      res.send(data);
    }
  });
});

//read
app.get('/api/Bag/store', function(req, res) {
  mysql.getStore(req.headers.zip, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/api/Bag/stores', function(req, res) {
  mysql.getStores(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.get('/api/Bag/product', function(req, res) {
  mysql.getProduct(req.headers.id, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

//update
app.put('/api/Bag/product', (req, res) => {
  let id = req.headers.id;
  let property = req.headers.property;
  let newVal = req.headers.newVal;

  mysql.updateProduct(id, property, newVal, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('product updated', data);
      res.send(data);
    }
  });
});
app.put('/api/Bag/store', (req, res) => {
  let id = req.headers.id;
  let property = req.headers.property;
  let newVal = req.headers.newVal;

  mysql.updateStore(id, property, newVal, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('store updated', data);
      res.send(data);
    }
  });
});

//delete
app.delete('/api/Bag/product', (req, res) => {
  let id = req.headers.id;
  mysql.deleteProduct(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('product deleted', data);
      res.send(data);
    }
  });
});


app.delete('/api/Bag/store', (req, res) => {
  let id = req.headers.id;
  mysql.deleteStore(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('store deleted', data);
      res.send(data);
    }
  });
});

let port = 3001;
app.listen(port, function() {
  console.log(`listening at http://localhost:${port}`);
});