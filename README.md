# Djungel Add-to-Cart Services
Backend services for Djungel, a conceptual furnishings retailer. Database schema & API are provided for MySQL, PostgreSQL, & Cassandra. Usage section describes scripts to generate and seed sample data.
## Related Projects
  - https://github.com/HRR-49-Volakis/ReviewsService
  - https://github.com/HRR-49-Volakis/MainProduct
  - https://github.com/HRR-49-Volakis/Alysa-Service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage ##

### instantiate DB: 
>mySQL: from root of repo, run mysql -u root < server/database/schema.sql 

Postgres: (from within shell):
> \i ../DW-SDC-Service/server/database/schema.sql

Cassandra:
>cqlsh -f ../DW-SDC-Service/server/database/schema.cql

### Seed DB :
Seed postgres::
>From root of repo,
>`npm run gen`
>`npm run loadPG`

Seed Cassandra:
>from root of repo, `npm run genCassie`
from within keyspace in shell, once .csvs have been generated:
seed products:
> `COPY products (id, name, description, price, review) FROM '/Users/dw/SDC/Add-To-Bag-Frans/server/data/productData.csv' WITH DELIMITER=',' AND HEADER=TRUE;`
seed stores:
>`COPY stores (id, name, address, zipcode, stock) FROM '/Users/dw/SDC/Add-To-Bag-Frans/server/data/storeData.csv' WITH DELIMITER=',' AND HEADER=TRUE;`

### Scripts
    Development Client "react-dev": "webpack"
    Development Server"server-dev": "node server/index.js"
    Test Suite: "test": "jest"
    Bundle: "build": "webpack --config webpack.config.js"
    Generate sample data on CSV for postgres: "gen": "node --max-old-space-size=8192 server/generator.js"
    For Cassandra: "genCassie": "node --max-old-space-size=8192 server/cassieGen.js"
    Seed Postgres: "loadPG": "node --max-old-space-size=8192 server/pgLoader.js"
    Seed Cassandra: "loadCassie": "node --max-old-space-size=8192 server/cassieLoader.js"
    Local Stress Testing: "stress": "artillery run artillery-server.yaml
    
## API:

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

