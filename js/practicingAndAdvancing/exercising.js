let weight;
console.loh(typeof weight);

// ------------------------

let name, age, stars, isSubscribed;

name = "Thaísa";
age = 22;
stars = 5.8;
isSubscribed = true;

// -----------------------

let student = {
  name: "Thaísa",
  age: 22,
  weight: 64.5,
  isSubscribed: true,
};
console.log(typeof student);
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
);

// ----------------------

let students = [];

students = [student];

console.log(students);
console.log(students[0]);

// --------------------

const leandro = {
  name: "Leandro",
  age: 21,
  weight: 76.5,
  isSubscribed: true,
};

// atribuir
// students = [student, leandro];
students[1] = leandro;

console.log(students);
