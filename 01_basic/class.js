//class.js
//객체(Object) - 학생(개념) - 학생(실체) ----예시
//               클래스(정의) - 인스턴스(실체) ----개념
class Student {
  //값을 저장(속성) --> 학생번호, 이름, 키, 몸무게, 점수... => 개념 정의 단계
  //여러 개 정의해야하면 이거
  constructor(studNo, studName, height) {
    this.studNo = studNo;
    this.studName = studName;
    this.height = height;
  }
  //동작을 저장(메소드) 이놈의 함수
  showInfo() {
    return `학번은 ${this.studNo}이고, 이름은 ${this.studName}다`;
  }
}

//인스턴스 생성 => 실체
const s1 = new Student("S001", "홍길동", 176.9);
console.log(s1.showInfo());
const s2 = new Student("S002", "박민수", 180.9);
console.log(s2.showInfo());

//인스턴스(객체=object) / (낱개 정의할거면 이거) 직관적임
const obj = {
  name: "Hong",
  age: 20,
  friends: ["친", "구", "만", "들", "지", "마"],
  pets: [
    { name: "호두", age: 9, friends: ["군밤이", "모찌"] },
    { name: "냐옹", age: 2, friends: ["치즈", "검둥"] },
  ],
  showInfo: function () {
    return `이름은 ${this.name}`;
  }, //showInfo : 기능을 정리하는 함수?
};
console.log(obj["pets"][0]["friends"][0]);
console.log(obj.pets);
// console.log(obj.friends);
console.log(window); //최상위 객체, DOM객체

const obj1 = {
  name: "Hwang",
  age: 21,
  showInfo: function () {
    return `이름은 ${this.name}`;
  },
};

//class Student 함수명 앞머리가 대문자면 보통 클래스 사용하겠다는 용도임.
function Member(memberNo, memberName) {
  this.memberNo = memberNo; //함수안에서의 this는 window에서의 memberNo를 가리킴.
  this.memberName = memberName;
  this.showInfo = function () {
    return `회원번호는 ${this.memberNo}이고, 이름은 ${this.memberName}이다`;
  };
}
const m1 = new Member("M001", "User01"); //인스턴스
console.log(m1.showInfo()); //왜 오류가 안날까
console.log(window.showInfo()); //왜 이게 오류가 나니?
