Create database burgers_db;
Use burgers_db;

CREATE TABLE burgers
(
    Id INT  auto_increment PRIMARY KEY, 
    burger_name varchar(50) NOT NULL,
    devoured boolean not null default false
   
);

select * from burgers;