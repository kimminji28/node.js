//customer와 관련된 라우팅 정보.
const router = require("express").Router();
const path = require("path"); //path 임포트.

//http요청방식 + end point => CRUD 처리 (REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next();
  },
  (req, res) => {
    // res.send("Get방식 요청.");
    // res.redirect("/");
    // res.download(path.join(__dirname, "./맹구.jpg"));
    console.log("응답처리중");
    res.json({ retCode: "Success", retMsg: "Server Status 200" }); //자스 객체타입 / 응답처리는 마지막에 배치
  },
);

router.post("/add", (req, res) => {
  res.send("Post방식 요청.");
});

//GET요청(parameter로 처리) //기존에는 app.js
// router.get("/login/:uid/:passwd", (req, res) => {
//   console.log(req.params);
//   res.send("login page.");
// });

//POST요청(parameter로 처리)
router.post("/login", (req, res) => {
  //기존에는 app.js
  console.log(req.body);
  res.send("login page.");
});

router.get("/error", (req, res) => {
  //기존에는 app.js
  //126page
  throw new Error("에러발생");
});

module.exports = router; //여기서 사용한 라우팅 정보를 외부에 익스포트.
