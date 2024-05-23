// function add(x, y) {
//   return x + y;
// }

// const num1 = 1;
// const num2 = 2;

// add(num1, num2);
// add(1, 2);

function swap(x, y) {
  // 100, 200
  let temp = x; // 100
  x = y; // 200
  y = temp; // 100
  console.log(`swap 함수 안 -> x: ${x}, y:${y}`); // 200, 100
}

let a = 100;
let b = 200;
console.log(`swap 호출 전-> a: ${a}, b:${b}`);

swap(a, b); //

console.log(`swap 호출 후 -> a: ${a}, b:${b}`); // 백틱, 템플릿 리터럴

///////////////////

function swap(numbers) {
  // arr
  let temp = numbers[0]; // tmp = 100
  numbers[0] = numbers[1]; // arr [200, 200]
  numbers[1] = temp; // arr [200, 100]

  // [tip] number로 원래 되어있었는 데, 로그 보고 디버깅 하는 법
  console.log(`swap 함수 안 -> numbers: ${numbers}`);
}

const number = 1;
let arr = [100, 200]; // 100과 200이 저장되어 있는 위치(주소)

console.log(arr); // index

console.log(`swap 호출 전 -> arr : ${arr}`);
swap(arr); // 주소가 전달

console.log(`swap 호출 후 -> arr : ${arr}`);
