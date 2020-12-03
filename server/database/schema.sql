DROP DATABASE IF EXISTS IKEA;
CREATE DATABASE IKEA;
USE IKEA;

CREATE TABLE Products (
  id int NOT NULL GENERATED ALWAYS AS IDENTITY,
  name varchar(144),
  description varchar(144),
  price int,
  review int,
  PRIMARY KEY(ID)
);

CREATE TABLE Stores (
  id int NOT NULL GENERATED ALWAYS AS IDENTITY,
  name varchar(144),
  address varchar(144),
  zipcode int,
  stock int,
  PRIMARY KEY(ID)
);

CREATE TABLE Inventory (
  id int NOT NULL GENERATED ALWAYS AS IDENTITY,
  stock int,
  StoresID int,
  ProductID int,
  PRIMARY KEY(ID),
  FOREIGN KEY (StoresID) REFERENCES Stores(id),
  FOREIGN KEY (ProductID) REFERENCES Products(id)
);