// Connect to MySQL (Be sure to install driver first-- 'npm install mysql')
var mysql = require('mysql');

// Package to generate fake values ('npm install faker')
var faker = require('faker');

// Create connection with MySQL database
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'test'
});

// Initiates a connection
con.connect(function(err) {
    if (err) {
        console.log("Error connecting to Database!");
        return;
    }
    else {
        console.log("Successfully connected to Database!")
    }
});

// 'Users' data table
CREATE TABLE Users (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name varchar(50),
    bio varchar(250),
    image varchar(250),
    PRIMARY KEY (id)
);

// 'Restaurants' data table
CREATE TABLE Restaurants (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name varchar(50),
    address varchar(250),
    phone varchar(25),
    image varchar(250),
    PRIMARY KEY (id)
);

// Add 10 rows of data for Users table
for(var i = 0; i < 10; i++) {
    INSERT INTO Users (id, name, bio, image) VALUES
    (i, faker.name.findName(), faker.lorem.sentence(), faker.image.avatar());
}

// Create 20 rows for Restaurant table
for(var i = 0; i < 20; i++) {
    INSERT INTO Restaurants (id, name, address, phone, image) VALUES
    (i, faker.company.companyName(), faker.address.streetAddress(),
    faker.phone.phoneNumber(), faker.image.food());
}

// Terminates the connection
con.end(function(err) {});
