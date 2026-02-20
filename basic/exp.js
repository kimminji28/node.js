//exp.js
//문자열 특정패턴 찾기.
console.log("Hello, World".replace(/l/g, "L")); // // => 모든 문자를 찾아라 / g는 global
console.log(/^01[016789]-?\d{3,4}-?\d{4}$/i.test("010-2345-9872")); //문자열이 있는지 구분해서 t/f로 표현해줌
// \d: 숫자가 있는지 체크
// i: 대소문자 구분없이 검색
// \s: 공백의 대응
result = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
  "test@email.co.kr",
);
console.log(result);
