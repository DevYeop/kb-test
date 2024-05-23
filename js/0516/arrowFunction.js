// const getTriangle = function (base, height) {
//   return (base * height) / 2;
// };

// function getTriangle(base, height) {
//   return (base * height) / 2;
// }

// const getTriangle = (base, height) => {
//   return (base * height) / 2;
// };

// 파라미터 == 매개변수
// 아규먼트 == 인수 == 인자

const getCircle = (r) => {
  // 4
  const PI = 3.14;
  const radius = r;

  return PI * r * r;
};

const getCircle2 = () => 3.14 * r * r;

const result = getCircle(5);
console.log(result);

// console.log('삼각형의 면적:' + getTriangle(5, 2));
console.log('원의 넓이:' + getCircle);
