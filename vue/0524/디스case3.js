// 'use strict';

let obj = { result: 0 };
console.log('1.global', this); // {}

obj.add = function (x, y) {
  const self = this; // add를 호출한 녀석. 즉 obj라는 변수(객체)
  console.log('2-1.this', this);
  function inner() {
    self.result = x + y;
    console.log('2-2.this', this); // 내부함수에서의 this는 undefined
    // console.log('3.this.result', this.result); // undefined의 result라는 속성을 참조했으므로 Error
  }
  inner();
};

obj.add(3, 4);
console.log('4.obj', obj);
// console.log('5.result', result);

console.log('6.obj.result', obj.result);
console.log('7.this', this);
console.log('8.this.result', this.result);
