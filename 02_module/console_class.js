//console_class.js
const { Console } = require("console");
const { boardList } = require("./board");
const fs = require("fs"); //노드가 갖고있는 내장되어있는 모듈. 파일시스템

// console.log(console); //log 형식 출력.
// console.table(boardList()); //표로 출력.
const output = fs.createWriteStream("./output/stdout.log", { flags: "a" }); //현재 폴더에 있는 output 폴더 하위에 스탠다드 파일을 하나 만들겠다.
const errorLog = fs.createWriteStream("./output/stderr.log", { flags: "a" });

const logger = new Console({ stdout: output, stderr: errorLog });
// logger.log("현재 시간은 " + new Date());
// logger.error("에러 발생");

module.exports = { logger };
