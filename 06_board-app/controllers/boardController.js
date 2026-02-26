//컨트롤(라우터 핸들러)
const boardService = require("../services/boardService");

//전체조회
const list = async (req, res) => {
  const [rows] = await boardService.getList();
  console.log("현재로그인정보: ", req.session.user.login_id);
  res.json(rows); //USER 화면에 출력될 결과
};

//상세조회
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

//등록(create)
const create = async (req, res) => {
  const { title, content, writer_id } = req.body;
  const [rows] = await boardService.getCreate(title, content, writer_id);
  // console.log(rows);
  if (rows.insertId != null) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
};
//try catch

module.exports = { list, detail, create };
