// const { logger } = require("./console_class");

// console.error(new Error("에러 발생"));

// const arr = [
//   { name: "John Doe", email: "John@mail.com" },
//   { name: "Jeremy Go", email: "Jeremy@mail.com" },
// ];

// console.table(arr);

// const obj = {
//   student: {
//     grade1: { class1: {}, class: {} },
//     grade2: { class1: {}, class: {} },
//     teachers: ["John Doe", "Jeremy Go"],
//   },
// };

// console.dir(obj, { depth: 1 });

// console.time("time for for-loop");
// for (let i = 0; i < 999999; i++) {}
// console.timeEnd("time for for-loop");

const company = {
  name: "John Doe",
  department: {
    engineering: {
      webTeam: {
        project: {
          name: "Global Dashboard",
          // lead: {name: 'Alice, skills: ['React', 'Node.js'. 'D3.js']},
        },
      },
    },
  },
};

console.dir(company, { depth: 5, color: true });

console.table(company);

// console.time("for loop");
// for (let i = 0; i <= 1000000; i++) {
//   console.log(i);
// }
// console.timeEnd("for loop");
