const { Pool, Client } = require('pg');
const { genProducts, genStores }= require('./generator.js');
const postgres = require('./database/pgIndex.js');

const connectionString = `postgres://dw:sweetbbj@localhost:5432/ikea`;
const pool = new Pool({
  connectionString
});
const client = new Client({
  connectionString
});
client.connect();
console.log('successful connection for data gen');

// let startTime, endTime, duration;

// const startTimer = () => {
//   startTime = new Date();
// }

// const endTimer = () => {
//   endTime = new Date();
//   duration = (endTime - startTime) / 1000;
// }

let products = genProducts();
let stores = genStores();

console.log(products.length);
console.log(stores.length);

// startTimer();
const seedProducts = new Promise( (resolve, reject) => {
  for (let product of products) {
    postgres.addProduct(product.name, product.description, product.price, product.review, (err, data) => {
      if (err) {
        console.log(err)
      }
    });
  }
  resolve();
});

seedProducts.then(() => {
  // endTimer();
  // console.log('Time to insert products in seconds:', duration);
})

// startTimer();
const seedStores = new Promise( (resolve, reject) => {
  for (let store of stores) {
    postgres.addStore(store.name, store.address, store.zipcode, store.stock, (err, data) => {
      if (err) {
        console.log(err)
      }
    });
  }
  resolve();
});

seedStores.then(() => {
  // endTimer();
  // console.log('Time to insert stores in seconds:', duration);
})



// endTimer();
// console.log('Time to insert products in seconds:', duration)


// client.end();
pool.end().then(() => console.log('ended connection to pool'))