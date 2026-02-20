//reduce() -이전 순번의 결과를 다음 순번의 매개값으로 활용.
result = [10, 15, 20, 25, 30].reduce((accm, elem, idx) => {
  console.log(idx, "->", accm, elem);
  if (elem >= 20) {
    const li = document.createElement("li");
    li.innerText = elem;
    accm.appendChild(li);
  }
  return accm; //accm > elem ? accm : elem;
}, document.querySelector("#list"));
console.log(result);

console.clear();
//Male 사람의 급여합계.
const sum_of_male = (accm, elem, idx, array) => {
  // console.log(idx, "->", accm, elem);
  const { salary, gender } = elem;
  if (elem.gender == "Male") {
    accm += salary;
  }
  return accm;
};
result = ary.reduce(sum_of_male, 0);
console.log("Male 급여 합계: " + result);

//Female의 급여가 10,000 이하인 사람들의 {번호/이름(fn+ln)/이메일/급여}
//새로운 배열로 생성.
const sal_of_female = (accm, elem) => {
  //sal_of_female에 누적값, 현재요소를 받는 함수를 넣어줌
  const { gender, id, first_name, last_name, email, salary } = elem; //elem 객체에서 필요한 속성만 꺼내서 변수로 저장 / 객체의 구조를 분해해주는 역할
  if (gender == "Female" && salary <= 10000) {
    //조건
    const obj = { id, name: first_name + "-" + last_name, email, salary }; //obj 변수에 매핑한 값을 담아줌
    accm.push(obj); //누적 accm 값에 obj를 추가.
  }
  return accm; //accm 값을 반환.
};
result = ary.reduce(sal_of_female, []); //콜백함수, 초기누적값
console.log(result); //출력
