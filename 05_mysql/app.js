//app.js
const express = require("express");
const path = require("path");
//.env 환경변수.
require("dotenv").config();

const mysql = require("./index");
const encrypto = require("./crypto");
const nodemailer = require("./nodemailer");
const { upload } = require("./multer");
const { excel_run } = require("./excel");

//express 인스턴스.
const app = express();

//body-parser
app.use(express.json());
//정적페이지
app.use(express.static(path.join(__dirname, "public")));

//라우팅
//1. 전체 목록 조회. 리소스+요청방식 => CRUD(REST 방식)
app.get("/api/customer", async (req, res) => {
  const result = await mysql.query("customerList");
  console.log(result);

  //결과응답
  // res.send("OK");
  res.json(result); //json 문자열로 반환.
});

//2. 등록
app.post("/api/customer", async (req, res) => {
  const { name, email, phone, passwd } = req.body;
  //암호화 단계
  const hashpasswd = encrypto.createPassword(passwd);

  const result = await mysql.query("customerInsert", [
    { name, email, phone, passwd: hashpasswd },
  ]);

  // const { name, email, phone } = req.body;
  // const result = await mysql.query("customerInsert", [req.body]);

  res.json(result);
});

//3. 수정
app.put("/api/customer", async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query("customerUpdate", [
    { name, email, phone },
    id,
  ]);

  res.json(result);
});

//4. 삭제
app.delete("/api/customer/:id", async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query("customerDelete", [id]);
  res.json(result);
});

//5. 조회(로그인: id(email), pw(평문 vs 암호화))
// 아이디를 id로 쓰기엔 숫자라 구분이 어려워서 이메일로 구분
app.post("/api/login", async (req, res) => {
  //조회 (email 기준으로 조회)
  const { email, passwd } = req.body;
  const result = await mysql.query("customerSelect", [email]);

  console.log(result[0].passwd); //데이터베이스에 이메일의 암호화 비번
  console.log(passwd);
  //checkPassword()
  const success1 = encrypto.checkPassword(passwd, result[0].passwd);
  //crypto안에 있는 checkPassword 함수를 호출해서 비교한다는 뜻.

  //(passwd, result[0].passwd): passwd는 postman에서 내가 입력한 값, 뒤에건 지정되어있는 값
  //result : 배열
  //[0]: 배열안에 있는 첫번째 값
  //.passwe: 암호화된 비번

  if (success1 == true) {
    res.json({ success: true }); //로그인 성공
  } else {
    res.json({ success: false }); //로그인 실패
  }
});

// //6. 메일발송
// app.post("/api/mail", upload.single("myfile"), async (req, res) => {
//   const { from, to, subject, text } = req.body;

//   //multi 라인으로 변경.
//   const html = text
//     .split("\n")
//     .map((elem) => `<p>${elem}</p>`)
//     .join("");

//   const result = await nodemailer.send({ from, to, subject, html });

//   res.json(result);
// });

//7. 파일첨부
app.post("/api/mail", upload.single("myfile"), async (req, res) => {
  const { from, to, subject, text } = req.body;
  console.log(req);

  //multi 라인으로 변경.
  const html = text
    .split("\n")
    .map((elem) => `<p>${elem}</p>`)
    .join("");

  //메일정보. 파일첨부 여부에 따라 처리.
  let attachments;
  if (req.file == undefined) {
    attachments = null;
  } else {
    attachments = [
      {
        filename: req.file.filename,
        // path: path.join,(__dirname, req.file.destination, req.file.filename),
        path: req.file.path,
      },
    ];
  }

  const postData = {
    from,
    to,
    subject,
    html,
    attachments,
  };

  const result = await nodemailer.send(postData);
  if (result.messageId) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
  // res.json(result);
  // res.send("<p>메일발송성공</p>");
});

//8. 엑셀파일 첨부 후 db insert.
app.post("/api/excel_upload", upload.single("myfile"), async (req, res) => {
  const result = excel_run(req.file.path);
  res.json(result);

  if (result) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
});

//9. 엑셀파일 클라이언트로 다운로드

app.listen(3000, () => {
  console.log("server is running...");
});
