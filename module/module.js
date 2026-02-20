//공유.
const { boardList, userName } = require("./board");
const { logger } = require("./console_class");

logger.log(userName); // 임포트는 했는데 익스포트 대상이 아님
let result = boardList();
// console.log(result);

for (let board of result) {
  logger.log(`글번호: ${board.bno}, 글제목: ${board.title}`);
}
