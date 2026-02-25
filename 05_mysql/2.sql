use dev;
select * from customers;

insert into customers (name, email, phone)
values('홍길동', 'hong@email.com', '010-1111-2222'); 

insert into customers set name ='김민규',
                                email='kim@email.com',
                                phone='010-2222-3333';
select * from customers;