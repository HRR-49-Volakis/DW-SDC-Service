const { Pool, Client } = require('pg');
const connectionString = `postgres://dw:sweetbbj@localhost:5432/ikea`;
const pool = new Pool({
  connectionString
});
const client = new Client({
  connectionString
});
client.connect();
console.log('successful connection for data gen');

//timer logic
let startTime, endTime, duration;
const startTimer = () => {
  startTime = new Date();
}
const endTimer = () => {
  endTime = new Date();
  duration = (endTime - startTime) / 1000;
}

//seeders
const seedProducts = () => {
  let query = `COPY products (name, description, price, review) FROM '/Users/dw/SDC/Add-To-Bag-Frans/server/data/productData.csv' DELIMITER ',' CSV HEADER`;
  pool.query(query, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`seeded products`);
      endTimer()
      console.log('Time to insert products in seconds:', duration);
    }
  })
}

const seedStores = () => {
  let query = `COPY stores (name, address, zipcode, stock) FROM '/Users/dw/SDC/Add-To-Bag-Frans/server/data/storeData.csv' DELIMITER ',' CSV HEADER`;
  pool.query(query, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`seeded stores`);
      endTimer()
      console.log('Time to insert stores in seconds:', duration);
    }
  })
}

startTimer();
seedProducts();

startTimer();
seedStores();

client.end();
pool.end().then(() => console.log('ended connection to pool'))