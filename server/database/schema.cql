DROP KEYSPACE IF EXISTS ikea;
CREATE KEYSPACE ikea
WITH replication = {'class':'NetworkTopologyStrategy', 'datacenter1' : 1};
USE ikea;

CREATE TABLE Products (
  id timestamp,
  name text,
  description text,
  price float,
  review int,
  PRIMARY KEY(name, id)
);

CREATE TABLE Stores (
  id timestamp,
  name text,
  address text,
  zipcode int,
  stock int,
  PRIMARY KEY(zipcode, id)
);

CREATE TABLE Inventory (
  id timestamp,
  stock int,
  StoresID int,
  ProductID int,
  PRIMARY KEY(id)
);