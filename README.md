# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> instantiate DB:
>mySQL: from root, run mysql -u root < server/database/schema.sql (it may be necessary to edit connection settings in mySql.js)

Postgres: from within shell:
> \i /Users/dw/SDC/Add-To-Bag-Frans/server/database/schema.sql

> Seed DB with sample data: from root, npm run seed (it may be necessary to edit connection settings in this file as well)

> API:

1. //create
>addProduct(name, description, price, review, callback)
>  -- generates one product object from arguments and inserts into Product Table

>addStore(name, address, zipcode, stock, callback)
>  -- generates one store object from arguments and inserts into Product Table

2. //read
>getProduct(id, callback)
>  -- retrieves one product based on id and passes response object to callback function

>getProducts(name, callback)
>  -- retrieves all products from Products table and passes an array of response objects to callback function

>getStore(name, callback)
>  -- retrieves one product based on id and passes response object to callback function

>getStores(callback)
>  -- retrieves 10 stores from Stores table and passes an array of response objects to callback function

3. //update
>updateProduct(id, property, newVal)
>  -- updates product, sets property to newValue for product with provided ID

>updateStore(id, property, newVal)
>  -- updates store, sets property to newValue for store with provided ID

4. //delete
>deleteProduct(id)
>  --deletes product with target id from products table

>deleteStore(id)
>  --deletes store with target id from store table

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

