create database validades;

use validades;

CREATE TABLE validades.user (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(200),
	email varchar(200),
	password varchar(256),
    type_user varchar(50) DEFAULT "USER",
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

create table validades.produtos (  
    id int not null primary key,     
    nome varchar(255) not null,     
    dia varchar(10) not null,     
    quantidade bigint not null,     
    preco varchar(15) 
);