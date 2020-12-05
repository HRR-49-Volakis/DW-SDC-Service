const faker = require('faker');

const fs = require('fs');

const genProducts = () => {
  let products = [];
  for (var i = 0; i < 10000000; i++) {
    var product = {};
    product.name = faker.commerce.product();
    product.description = faker.commerce.productAdjective();
    product.price = Number.parseInt(faker.commerce.price());
    product.review = faker.random.number();
    products.push(product);
  }
  return products;
}

const genStores = () => {
  let stores = [];
  for (var i = 0; i < 10000000; i++) {
    var store = {};
    store.name = faker.address.county();
    store.address = faker.address.streetAddress();
    store.zipcode = Number.parseInt(faker.address.zipCode().slice(0,5));
    store.stock = faker.random.number();
    stores.push(store);
  }
  return stores;
}

let products = genProducts();
let stores = genStores();
console.log('records generated for products: ', products.length);
console.log('records generated for stores: ', stores.length)

const writeProductHeader = () => {
  const productStream = fs.createWriteStream(`${__dirname}/data/productData.csv`);
  productStream.write('name,description,price,review\n');
};

const writeProducts = () => {
  const productStream = fs.createWriteStream(`${__dirname}/data/productData.csv`, {flags: 'a'});
  for (let product of products) {
    productStream.write(`${product.name},${product.description},${product.price},${product.review}\n`);
  }
}

const makeProductCSV = () => {
  writeProductHeader();
  writeProducts();
}


const writeStoresHeader = () => {
  const storeStream = fs.createWriteStream(`${__dirname}/data/storeData.csv`);
  storeStream.write('name,address,zipcode,stock\n');
}

const writeStores = () => {
  const storeStream = fs.createWriteStream(`${__dirname}/data/storeData.csv`, {flags: 'a'});
  for (let store of stores) {
    storeStream.write(`${store.name},${store.address},${store.zipcode},${store.stock}\n`);
  }
}

const makeStoreCSV = () => {
  writeStoresHeader();
  writeStores();
}

makeProductCSV();
makeStoreCSV();

module.exports = {
  makeProductCSV,
  makeStoreCSV
}
