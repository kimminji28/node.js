const { logger } = require("./console_class");

//timer.js
setTimeout(function () {
  console.log("1초 후 실행");
}, 1000);

const job = setInterval(function () {
  logger.log("현재시간에 실행");
  logger.log("실행");
}, 1000);

//종료.
setTimeout(() => {
  clearInterval(job);
}, 10000);

// logger.log(new Date() + "실행");
module.exports = { job };
