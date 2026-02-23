const express = require("express"); //임포트.
const app = express(); //인스턴스 생성.
const fs = require("fs");
const customerRoute = require("./routes/customer"); //customer에 있는 routes를 임포트.
const compression = require("compression");
const session = require("express-session");
const fileStort = require("session-file-store")(session);
const cors = require("cors");

//정적파일 폴더(html, css,html-js)
app.use(express.static("public"));

//body parser 셋업 / 모듈의 추가적인 기능을 미들웨어라고 함.
app.use(express.urlencoded()); //x-www-form-urlencoded가 넘어오면 걔를 해석해드림.
app.use(express.json()); //body의 포맷이 json으로 넘어오는걸 해석해주는 body parser.
app.use("/customer/download", compression()); //모든 라우팅에 적용됨. customer-download 파일을 압축하겠다.

//session 관리.
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, //true=> https, false=> http
      maxAge: 600000,
    },
    // store: new fileStort(), //추가 얘 때문에 콘솔이 자꾸 깜빡거림.
  }),
);

//cors 정책 위반해도 데이터를 전달해주겠다. (셋업)
app.use(cors());

//라우팅. 요청방식+URL(end point) => 실행할 함수 / 사용자가 요청을 보냈을 때 응답을 보여줌
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  //fs.readFile 메소드 (비동기) / fs.readFileSyne (동기)
  const filePath = path.join(__dirname, "index.html"); //비동기
  const data = fs.readFileSync(filePath, "utf-8"); //동기
  res.send(data);
});

//외부 라우팅 정보 임포트. / 상위 url를 선택하면 그 안에 있는 customerRoute 정보를 사용
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

app.get("/data", (req, res) => {
  res.json({ id: "1001", data: "sample" });
});

//session (1)
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  console.log(req.session.user);
  res.send("session에 저장.");
});

//session (2)
app.get("/logout", (req, res) => {
  req.session.destroy(); //session 삭제 방법
  res.send("로그아웃");
});

//session (3)
app.get("/my_info", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

//express 에러처리 방식.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});

//서버 실행.
app.listen(3000, () => {
  console.log(`서버 실행... http://localhost:3000`);
});
