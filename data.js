const data = `[{"id":1,"first_name":"Dina","last_name":"Keely","email":"dkeely0@omniture.com","gender":"Female","salary":9842},
{"id":2,"first_name":"Ursuline","last_name":"Tavner","email":"utavner1@smugmug.com","gender":"Female","salary":6450},
{"id":3,"first_name":"See","last_name":"Calterone","email":"scalterone2@yolasite.com","gender":"Male","salary":7229},
{"id":4,"first_name":"Gay","last_name":"Emmet","email":"gemmet3@surveymonkey.com","gender":"Female","salary":12135},
{"id":5,"first_name":"Deny","last_name":"Rampling","email":"drampling4@ow.ly","gender":"Female","salary":7252},
{"id":6,"first_name":"Clair","last_name":"Burnhard","email":"cburnhard5@icq.com","gender":"Male","salary":7373},
{"id":7,"first_name":"Germain","last_name":"Golder","email":"ggolder6@bravesites.com","gender":"Female","salary":11810},
{"id":8,"first_name":"Layla","last_name":"Jobes","email":"ljobes7@cmu.edu","gender":"Female","salary":14252},
{"id":9,"first_name":"Maximilien","last_name":"Chambers","email":"mchambers8@utexas.edu","gender":"Male","salary":7280},
{"id":10,"first_name":"Serge","last_name":"Mawne","email":"smawne9@blogs.com","gender":"Male","salary":11772},
{"id":11,"first_name":"Sandie","last_name":"Blowers","email":"sblowersa@tripadvisor.com","gender":"Female","salary":7176},
{"id":12,"first_name":"Esdras","last_name":"Althrope","email":"ealthropeb@sakura.ne.jp","gender":"Male","salary":5670},
{"id":13,"first_name":"Kylie","last_name":"Pargiter","email":"kpargiterc@blogs.com","gender":"Female","salary":9821},
{"id":14,"first_name":"Christy","last_name":"Guerrin","email":"cguerrind@hatena.ne.jp","gender":"Female","salary":13094},
{"id":15,"first_name":"Trescha","last_name":"Phillpot","email":"tphillpote@imgur.com","gender":"Female","salary":8516},
{"id":16,"first_name":"Oralee","last_name":"Affron","email":"oaffronf@instagram.com","gender":"Female","salary":4634},
{"id":17,"first_name":"Shannon","last_name":"Ren","email":"sreng@technorati.com","gender":"Male","salary":9869},
{"id":18,"first_name":"Ferd","last_name":"Craufurd","email":"fcraufurdh@shutterfly.com","gender":"Male","salary":4665},
{"id":19,"first_name":"Abigael","last_name":"McSwan","email":"amcswani@cbslocal.com","gender":"Female","salary":7190},
{"id":20,"first_name":"Emmi","last_name":"Farnin","email":"efarninj@alibaba.com","gender":"Female","salary":5294}]`;

//JSON문자열 -> Object
const ary = JSON.parse(data);
// console.log(ary);

//Object -> JSON문자열
const json = JSON.stringify(ary);
// console.log(json);

// //sort() 데이터를 정렬하는 함수 (가나다순)
// console.log(["Hello", "Hi", "Good", "World"].sort());
// console.log([10, 35, 21, 121, 11].sort((n1, n2) => n2 - n1));
//오름차순 -> -값을 반환하는 조건을 만들어줘야함.
// if (n1 < n2) {
//   return -1;
// } else {
//   return 1;
// }

//id순으로 정렬하는 함수.
const order_by_id = (obj1, obj2) => obj2.id - obj1.id;

//salary 오름차순 함수.
const order_by_salary = (obj1, obj2) => obj1.salary - obj2.salary;

// first_name 오름차순 정렬.
const order_by_fn = (obj1, obj2) =>
  obj1.first_name < obj2.first_name ? -1 : 1;
// const order_by_fn = (obj1, obj2) => {
//   if (obj1.first_name > obj2.first_name) {
//     return -1;
//   } else {
//     return 1;
//   }
// };
let result = ary.sort(order_by_fn); //id기준 정렬.
// console.log(result);

function getMember() {
  return ["user01", "user02", "user03"];
}

// module.exports = { ary, order_by_fn };
