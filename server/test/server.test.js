const schema = require('./database/mySql.js');
test('Can add and find proper data into and from Schema', async function test (){
 await schema.addProduct('Frans','Hello',5);
 schema.getProduct('Frans', (err, data) => {
   expect(data).toEqual([{description: 'Hello', price: 5}]);
 });
});
