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

CREATE TABLE validades.promoter (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(256),
	empresa varchar(256),
	entrada varchar(256),
    saida varchar(256),
    observacao varchar(256),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE validades.datas (
	id int(10) PRIMARY KEY auto_increment,
	produto varchar(256),
	marca varchar(256),
    setor varchar(256),
    validade varchar(256),
    valor varchar(256),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);