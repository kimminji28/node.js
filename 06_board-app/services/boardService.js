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

module.exports = { getList, getDetail, getCreate };
