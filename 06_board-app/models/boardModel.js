//게시글 관련된 정보 CRUD(REST) 기능.
const pool = require("../config/db");
const { getDetail } = require("../services/boardService");

//전체 글목록 반환해주는 기능.
async function getList() {
  const sql = `
  SELECT b.board_id,
    b.title,
    b.content,
    DATE_FORMAT(b.created_at, '%Y-%m-%d') AS created_at,
    b.writer_id,
    m.login_id,
    m.name,
    m.member_id
  FROM tbl_board b
  JOIN tbl_member m ON b.writer_id = m.member_id
  ORDER BY b.board_id DESC
  `;
  return pool.query(sql);
}
const run = async () => {
  const [result, meataData] = await getList();
  console.log(result[0]);
};
run();

//건별조회
async function getById(id) {
  const sql = `
  SELECT b.board_id,
    b.title,
    b.content,
    DATE_FORMAT(b.created_at, '%Y-%m-%d') AS created_at,
    b.writer_id,
    m.login_id,
    m.name,
    m.member_id
  FROM tbl_board b
  JOIN tbl_member m ON b.writer_id = m.member_id
  WHERE b.board_id = ?;
  `;
  return pool.query(sql, [id]);
}

//글등록(insert)
async function insert(title, content, writer_id) {
  const sql = `
  INSERT INTO tbl_board (title, content, writer_id)
  VALUES (?,?,?)
  `;
  return pool.query(sql, [title, content, writer_id]);
}

//글삭제(remove)
async function remove(id) {
  const sql = `delete from tbl_board where board_id = ?`;
  return pool.query(sql, [id]);
}

//모듈 exports
module.exports = { getList, getById, insert, remove };
