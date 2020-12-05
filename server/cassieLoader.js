const { genProducts, genStores }= require('./generator.js');
const cassandra = require('cassandra-driver');
const cassie = require('./database/cassIndex.js');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'ikea'
});

client.connect().then(console.log('connected to cassie'));

let products = genProducts();
let stores = genStores();

console.log(products.length);
console.log(stores.length);

const seedProducts = new Promise( (resolve, reject) => {
  for (let product of products) {
    cassie.addProduct(product.name, product.description, product.price, product.review, (err, data) => {
      if (err) {
        console.log(err)
      }
    });
  }
  resolve();
});

seedProducts.then(() => {
})

const seedStores = new Promise( (resolve, reject) => {
  for (let store of stores) {

    cassie.addStore(store.name, store.address, store.zipcode, store.stock, (err, data) => {
      if (err) {
        console.log(err)
      }
    });
  }
  resolve();
});

seedStores.then(() => {
})