use dev;
select * from customers;

insert into customers (name, email, phone)
values('홍길동', 'hong@email.com', '010-1111-2222'); 

insert into customers set name ='김호두',
                                email='hodu@email.com',
                                phone='010-2222-3333',
                                passwd='1234';
select * from customers;
alter table customers add column passwd varchar(100) not null;
alter table customers MODIFY passwd varchar(100) not null;
ALTER TABLE customers MODIFY email VARCHAR(45) NOT NULL;
alter table customers MODIFY email varchar(45) not null unique;
alter table customers drop constraint email;

desc customers;

delete
from customers
where id = 5;

update customers
set passwd = '1111'
where id > 0;

update customers
set id = 4
where id = 10;

delete 
from customers
where id = 9;