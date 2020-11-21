const express = require('express');
const mysql = require('./database/mySql.js');
let app = express();
app.use(express.static('client/dist'));

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

let port = 3001;
app.listen(port, function() {
  console.log('listening');
});