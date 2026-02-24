//password.js 암호화
const crypto = require("crypto");

const pw = crypto.createHash("sha512").update("test1234").digest("base64");
// console.log(pw);

async function createPassword() {
  //salt 생성(그때그때 달라지는 시드값)
  const salt = await new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        console.log("error=>", err);
        reject(err);
      }
      console.log(buf.toString("base64"));
      resolve(buf.toString("base64")); //salt 변수에 저장하기 위함.
    });
  });
  // console.log(`salt=> ${salt}`);

  // 암호화된 비밀번호 생성.
  // 1) 암호화 평문 2) salt 값 3)10만번 반복 해시 생성 4)패스워드 길이
  // 5)해시함수 (어떤 방식으로 암호하겠다.) 6) callback 함수
  crypto.pbkdf2("test1234", salt, 100000, 64, "sha512", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.toString("base64"));
  });
} //end of createPassword.
createPassword();
