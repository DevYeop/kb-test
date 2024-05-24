// 'use strict';

let obj = { result: 0 };
console.log('global', this);

obj.add = function (x, y) {
  const inner = () => {
    this.result = x + y;
    console.log('2.this', this); // 내부 함수더라도 화살표함수를 쓰면, innert()를 호출한 현재 객체를 참조함
    console.log('3.this.result', this.result);
  };
  inner();
};

obj.add(3, 4);
console.log('4.obj', obj);
// console.log('5.result', result);

console.log('6.obj.result', obj.result);

console.log('7.this', this);
console.log('8.this.result', this.result);
