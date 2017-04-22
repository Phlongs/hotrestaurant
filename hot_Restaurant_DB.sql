create database hot_Restaurant_DB;

use hot_Restaurant_DB;

Create Table products(
	unique_id integer(10) auto_increment not null,
    reservation_name varchar(30) NOT NULL,
    physical_number int(30) NOT NULL,
	email varchar(30) NOT NULL,
    primary key(unique_id)
);