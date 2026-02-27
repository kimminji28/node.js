-- 회원 테이블
CREATE TABLE tbl_member (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    login_id VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 게시판 테이블
CREATE TABLE tbl_board (
    board_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    writer_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (writer_id) REFERENCES tbl_member(member_id)
);

-- 게시판, 회원
use dev;
select * from tbl_member;
insert into tbl_member (login_id, name, password)
values('user1', '김호두루미','askifhasjkgfhaklsjghnasl'); 
insert into tbl_member (login_id, name, password, role)
values('user99', '김관리','askifhasjkgfhaklsjghnasl', 'ADMIN'); 

select * from tbl_board;
insert into tbl_board (title, content, writer_id)
values ('1번째 글제목', '1번째 글내용', 1);
insert into tbl_board (title, content, writer_id)
values ('1번째 공지사항', '1번째 공지사항을 잘 지켜주세요', 2);

select b.*, m.login_id, m.name
from tbl_board b
join tbl_member m on b.writer_id = m.member_id
-- where board_id = 1;
order by board_id desc;

delete from tbl_member
where member_id = 7;

delete from tbl_board
where board_id = 26;

update tbl_board
set board_id = 7
where board_id = 30;

update tbl_member
set name = "최산삼"
where member_id = 8;

update tbl_member
set password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJfaWQiOjksImxvZ2luX2lkIjoidXNlcjc3Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzIxNzAxODMsImV4cCI6MTc3MjIwNjE4M30.YGJXwOtP_iZfUMSRRESSuxNnRyRSIajhsKBeYO5TaB0"
where member_id = 9;




