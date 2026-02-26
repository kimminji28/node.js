const router = require("express").Router();
const ctrl = require("../controllers/boardController");

//조회(Get요청).
router.get("/", ctrl.list); // http://localhost:3000/board (전체목록 조회)
router.get("/:id", ctrl.detail); // http://localhost:3000/board/1 (건별목록 조회)

//등록(Post) ctrl.create
router.post("/insert", ctrl.create);

//수정(Put)
//삭제(Delele)

module.exports = router;
