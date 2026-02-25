//multer.js
const multer = require("multer");
const path = require("path");

//multer 미들웨어 사용해서 업로드 처리(업로드 경로, 업로드 파일 rename)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //업로드 폴더를 지정하겠다.
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    //파일명_한글 안깨지게 처리.
    const encfile = Buffer.from(file.originalname, "latin1").toString("utf-8");
    const fn = path.basename(encfile, path.extname(encfile));
    const ext = path.extname(encfile);
    const uniqueName = fn + "_" + new Date().valueOf() + ext;
    cb(null, uniqueName);
  },
});

// const storage2 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     //업로드 폴더를 지정하겠다.
//     cb(null, "files");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     //파일명_한글 안깨지게 처리.
//     const encfile = Buffer.from(file.originalname, "latin1").toString("utf-8");
//     const fn = path.basename(encfile, path.extname(encfile));
//     const ext = path.extname(encfile);
//     const uniqueName = fn + "_" + new Date().valueOf() + ext;
//     cb(null, uniqueName);
//   },
// });

const upload = multer({ storage: storage });

// const upload = multer({ storage: limits:{
//   fileSize: 50 * 1024 * 1024, //

// } });

// const upload2 = multer({ storage: storage2 });

module.exports = { upload };
