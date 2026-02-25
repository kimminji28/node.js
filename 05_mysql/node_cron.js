const cron = require("node-cron");
const { logger } = require("./winston");
//.env 환경변수.
require("dotenv").config();
const nodemailer = require("./nodemailer");

//주기적으로 실행.
cron.schedule("0 50 12 * * *", () => {
  //매초* 매분* 매시간* 날짜* 매월* 요일* => 한국시간 기준
  // console.log(Data.now());
  nodemailer.send({
    from: "alswl25852@daum.net",
    to: "koala579@daum.net",
    subject: "점심시간",
    text: "밥 먹으러 GO",
  });
  logger.info("메일 발송");
});
