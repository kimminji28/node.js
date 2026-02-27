const router = require("express").Router();
const ctrl = require("../controllers/boardController");
const mid = require("../middleware/auth"); //로그인 정보가 있으면 리스트 보여주는데 없으면 NG냄

//조회(Get요청).
router.get("/", ctrl.list); // http://localhost:3000/board (전체목록 조회)
router.get("/:id", ctrl.detail); // http://localhost:3000/board/1 (건별목록 조회)

//등록(Post) ctrl.create
// router.post("/insert", ctrl.create); //글등록
router.post("/insert", mid.verifyToken, ctrl.create); //글등록

//수정(Put)

//삭제(Delele)
router.delete("/:id", mid.verifyToken, ctrl.remove); //글삭제

module.exports = router;
