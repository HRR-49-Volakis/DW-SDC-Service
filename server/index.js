const express = require('express');
const postgres = require('./database/pgIndex.js');
let app = express();
app.use(express.static('client/dist'));

//create
app.post('/api/Bag/product', (req, res) => {
  let name = req.headers.name;
  let description = req.headers.description;
  let price = req.headers.price;
  let review = req.headers.review;
  console.log('created new product')
  postgres.addProduct(name, description, price, review, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('product added', data);
      res.status(200).json(data.rows);
    }
  });
});
app.post('/api/Bag/store', (req, res) => {
  let name = req.headers.name;
  let address = req.headers.address;
  let zip = req.headers.zip;
  let stock = req.headers.stock;
  postgres.addStore(name, address, zip, stock, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('store added', data);
      res.status(200).json(data.rows);
    }
  });
});

//read
app.get('/api/Bag/store', function(req, res) {
  console.log('GET for one store')
  postgres.getStore(req.headers.zip, function(err, data) {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      res.status(200).json(data.rows);
    }
  });
});

app.get('/api/Bag/stores', function(req, res) {
  console.log('GET for all stores')
  postgres.getStores(function(err, data) {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      res.status(200).json(data.rows);
    }
  });
});

app.get('/api/Bag/product', function(req, res) {
  console.log('GET for product')
  postgres.getProduct(req.headers.id, function(err, data) {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      res.status(200).json(data.rows);
    }
  });
});

app.get('/api/Bag/products', function(req, res) {
  console.log('GET for all products')
  postgres.getProducts(function(err, data) {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      res.status(200).json(data.rows);
    }
  });
});

//update
app.put('/api/Bag/product', (req, res) => {
  let id = req.headers.id;
  let property = req.headers.property;
  let newVal = req.headers.newval;
  console.log(req.headers);
  postgres.updateProduct(id, property, newVal, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('product updated', data);
      res.status(200).json(data.rows);
    }
  });
});
app.put('/api/Bag/store', (req, res) => {
  let id = req.headers.id;
  let property = req.headers.property;
  let newVal = req.headers.newval;
  postgres.updateStore(id, property, newVal, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('store updated', data);
      res.status(200).json(data.rows);
    }
  });
});

//delete
app.delete('/api/Bag/product', (req, res) => {
  let id = req.headers.id;
  postgres.deleteProduct(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('product deleted');
      res.status(200).json(data.rows);
    }
  });
});
app.delete('/api/Bag/store', (req, res) => {
  let id = req.headers.id;
  postgres.deleteStore(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('store deleted');
      res.status(200).json(data.rows);
    }
  });
});

let port = 3001;
app.listen(port, function() {
  console.log(`listening at http://localhost:${port}`);
});