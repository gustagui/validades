create database validades;

use validades;

create table validades.user (
	id_usuario int primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    nickName varchar(255) not null,
    password varchar(255) not null
);

create table validades.produtos (  
    id int not null primary key,     
    nome varchar(255) not null,     
    dia varchar(10) not null,     
    quantidade bigint not null,     
    preco varchar(15) 
);
