// console.log(x); // undefined
// var x = 5; // var는 호이스팅 되면서 선언과 초기화가(undefined으로) 함께 진행된다
// console.log(x); // 5

// // 실제 해석되는 모습
// var x
// console.log(x);
// x = 5;
// console.log(x);

/////////////////////////

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // 10

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 15;
// console.log(z); // 15

// 변수 - 선언 / 초기화, 할당
// const value = '이상엽';
// value = 1;

const obj = { name: '이상엽' };
obj.name = '김상엽';
obj = { name: '김상엽' };
console.log(obj);
