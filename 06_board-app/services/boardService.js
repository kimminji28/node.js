//업무 단위로 처리하겠다.
const boardModel = require("../models/boardModel");

//서비스 - 모델 => 1:1매칭.
//글전체목록조회하는 업무
async function getList() {
  return boardModel.getList();
}

//건별 조회.
async function getDetail(id) {
  return boardModel.getById(id);
}

//등록(create)
async function getCreate(title, content, writer_id) {
  return boardModel.insert(title, content, writer_id);
}

//삭제(remove)
async function remove(board_id, user) {
  const [rows] = await boardModel.getById(board_id);
  const board = rows[0];
  // console.log("board.writer_id:", board.writer_id);
  // console.log("user.member_id:", user.member_id);
  //권한체크
  if (board.writer_id != user.member_id) {
    return "NO_AUTH";
  }

  return boardModel.remove(board_id);
}

module.exports = { getList, getDetail, getCreate, remove };
