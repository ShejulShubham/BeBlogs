create database blog_db;


use blog_db;


create table user(
userid int auto_increment,
name varchar(50),
email varchar(30),
password varchar(20),
phone varchar(15),
userdate datetime default current_timestamp,
primary key (userid)
);

userid, name, email, password, phone


create table blog(
blogid int auto_increment,
blogtitle varchar(30),
content varchar(50),
blogdate datetime default current_timestamp,
userid int,
catid int,
primary key (blogid),
foreign key (userid) references user (userid),
foreign key (catid) references category (catid)
);

blogid, blogtitle, cattitle, blogdate

blogid ,blogtitle, cattitle, content, blodgdate

create table category(
catid int auto_increment,
cattitle varchar(30),
description varchar(50),
primary key (catid)
);



