//ary.js 배열을 대상으로 사용가능한 함수
console.clear();

//급여가 10,000보다 작은 사람들.
const less_than_10000 = (elem, idx) => {
  console.log(elem, idx);
  if (elem.salary < 10000) {
    return true;
  }
  return false;
};

//여자 급여가 8,000 이상인 사람.
const more_than_8000 = (elem) => elem.gender == "Female" && elem.salary >= 8000;

//filter() : 조건을 만족하는 요소들만 새로운 배열에 담음

result = ary
  .filter(more_than_8000) // console.log(result);
  .map((elem, idx, array) => {
    //ary의 담겨있는 데이터를 elem이라는 변수로 표시하겠다.

    //map() : A -> A' (매핑)
    //id/first_name/last_name/email/gender/salary : A
    //no/name/gender/salary : A'

    //객체구조분해.
    const { id, first_name, last_name, gender, email, salary } = elem;
    //
    const obj = {
      no: id,
      name: first_name + "-" + last_name,
      gender,
      salary,
    };
    return obj;
  });
//결과출력
console.log(result);
