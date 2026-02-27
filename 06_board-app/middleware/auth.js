const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  console.log("middleware...");
  if (req.session.user) {
    next(); //req.session.user에 값이 있으면 다음에 올 미들웨어를 호출
  } else {
    return res.send({ retCode: "NG", retMsg: "권한이 없습니다." }); //값이 없으면 끝내라
  }
};

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization; //너는 누구니
  console.log(authHeader); // Bearer eyJhbGciOi...

  if (!authHeader) {
    return res.json({ retCode: "NG", retMsg: "토큰 값이 없음" });
  }
  //정상처리
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "secret-token"); //만들어진 토큰 => 원래의 값으로 분리.
    // console.log(decoded);
    // console.log("authorization:", req.headers.authorization);

    req.user = decoded; //{member_id, login_id, role}이 들어있음
    next();
  } catch (err) {
    return res.json({ retCode: "NG", retMsg: "토큰 오류, auth.js" });
  }
};

module.exports = { authCheck, verifyToken };
