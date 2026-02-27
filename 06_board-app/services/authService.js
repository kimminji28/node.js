const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authModel = require("../models/memberModel");

//회원가입
async function signup(loginId, name, password, role) {
  const hashed = await bcrypt.hash(password, 10); //암호화
  console.log(hashed);
  return authModel.createMember(loginId, name, hashed, role);
}

//로그인
async function login(loginId, password) {
  const [rows] = await authModel.findMemberById(loginId);

  //조회된 결과가 없으면 실패라는 값을 반환.
  if (rows.length == 0) {
    return null;
  }
  //평문:password 비교>rows[0].passwd
  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  console.log(match);

  //로그인 정상처리.
  if (!match) {
    return null;
  }
  //token 발행 -> 암호화 -> 반환
  const token = jwt.sign(
    {
      member_id: user.member_id,
      login_id: user.login_id,
      role: user.role,
    },
    "secret-token",
    { expiresIn: "10h" },
  );
  console.log(token);
  //정상
  return token; //암호화된 token을 만들어서 사용
}

module.exports = { signup, login };
