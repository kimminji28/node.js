const pool = require("../config/db");

//글등록
async function createMember(loginId, name, password, role) {
  const sql = `
  INSERT INTO tbl_member (login_id, name, password, role)
                  VALUES (?,?,?,?)`;
  return pool.query(sql, [loginId, name, password, role]);
}

//조회
async function findMemberById(loginId) {
  const sql = `select * from tbl_member where login_id = ?`;
  return pool.query(sql, [loginId]);
}

//모듈 exports
module.exports = { createMember, findMemberById };
