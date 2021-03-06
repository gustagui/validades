create database heroku_506ea39d50d24bd;

use heroku_506ea39d50d24bd;

CREATE TABLE heroku_506ea39d50d24bd.user (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(200),
	email varchar(200),
	password varchar(256),
    type_user varchar(50) DEFAULT "USER",
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

create table heroku_506ea39d50d24bd.produtos (  
    id int not null primary key,     
    nome varchar(255) not null,     
    dia varchar(10) not null,     
    quantidade bigint not null,     
    preco varchar(15) 
);

CREATE TABLE heroku_506ea39d50d24bd.promoter (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(256),
	empresa varchar(256),
    dia varchar(256),
	entrada varchar(256),
    saida varchar(256),
    observacao varchar(256),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE heroku_506ea39d50d24bd.datas (
	id int(10) PRIMARY KEY auto_increment,
	produto varchar(256),
	marca varchar(256),
    setor varchar(256),
    validade varchar(256),
    quantidade varchar(256),
    valor varchar(256),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);