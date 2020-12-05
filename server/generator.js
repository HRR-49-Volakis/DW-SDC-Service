const faker = require('faker');

const genProducts = () => {
  let products = [];
  for (var i = 0; i < 10000000; i++) {
    var product = {};
    product.name = faker.commerce.product();
    product.description = faker.commerce.productAdjective();
    product.price = faker.commerce.price();
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
    store.zipcode = faker.address.zipCode();
    store.stock = faker.random.number();
    stores.push(store);
  }
  return stores;
}

module.exports = {
  genProducts,
  genStores
}
