function People(nickname, student) {
  this.nickname = nickname;
  this.student = student;
}

function Student(name, korean, math, english, science) {
  // const fullname = name;
  this.fullname = name;
  this.국어 = korean;
  this.수학 = math;
  this.영어 = english;
  this.과학 = science;
}

Student.prototype.getSum = function () {
  return this.국어 + this.수학 + this.영어 + this.과학;
};
Student.prototype.getAverage = function () {
  return this.getSum() / 4;
};
Student.prototype.toString = function () {
  return this.이름 + '\t' + this.getSum() + '\t' + this.getAverage();
};

let student = new Student('김세진', 90, 83, 76, 89);

let people = new People('이상엽', student);
let result = people.student.getAverage();

// console.log(student);
// console.log(student.fullname);

console.log(people.nickname);
console.log(result);
