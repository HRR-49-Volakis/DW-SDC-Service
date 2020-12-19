const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'ikea'
});

client.connect().then(console.log('connected to cassie'));

//timer logic
let startTime, endTime, duration;
const startTimer = () => {
  startTime = new Date();
};
const endTimer = () => {
  endTime = new Date();
  duration = (endTime - startTime) / 1000;
};

const seedProducts = () => {
  let query = `COPY products (id, name, description, price, review) FROM '/Users/dw/SDC/Add-To-Bag-Frans/server/data/productData.csv' WITH DELIMITER=',' AND HEADER=TRUE`;
  client.execute(query, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`seeded products`);
      endTimer()
      console.log('Time to insert products in seconds:', duration);
    }
  });
};

startTimer();
seedProducts();


// const seedProducts = new Promise( (resolve, reject) => {
//   for (let product of products) {
//     cassie.addProduct(product.name, product.description, product.price, product.review, (err, data) => {
//       if (err) {
//         console.log(err)
//       }
//     });
//     // products.shift()
//   }
//   resolve();
// });

// const seedStores = new Promise( (resolve, reject) => {
//   for (let store of stores) {

//     cassie.addStore(store.name, store.address, store.zipcode, store.stock, (err, data) => {
//       if (err) {
//         console.log(err)
//       }
//     });
//     // products.shift()
//   }
//   resolve();
// });

// seedStores.then(() => {
// })