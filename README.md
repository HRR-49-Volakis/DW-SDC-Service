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

> instantiate DB: from root, run mysql -u root < server/database/schema.sql (it may be necessary to edit connection settings in mySql.js)

> Seed DB with sample data: from root, npm run seed (it may be necessary to edit connection settings in this file as well)

> API:

//create
addProduct(name, description, price)
addStore(name, address, zipcode)

//read
getProduct(id, callback)
getProducts(name, callback)
getStore(name, callback)
getStores(callback)


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

