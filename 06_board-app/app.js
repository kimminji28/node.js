//express 인스턴스.
const express = require("express");
const session = require("express-session");
require("dotenv").config();

//서버 인스턴스 생성.
const app = express();
app.use(express.static("public")); //3000 포트에서 실행

//json을 처리하는 body-parser
app.use(express.json());

//express-session setup
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, //true=> https, false=> http
      maxAge: 10 * 60 * 1000,
    },
    // store: new fileStort(), //추가 얘 때문에 콘솔이 자꾸 깜빡거림.
  }),
);

//라우팅 정보.
app.use("/api/board", require("./routes/boardRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

//서버 스타트
app.listen(3000, () => {
  console.log("http://localhost:3000 is running...");
});
