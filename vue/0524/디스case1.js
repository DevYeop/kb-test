// commonjs vs es6

/**
 * 웹브라우저 말고 Node.js 내에서
 * es6 >> this == undefined
 * commonjs >> this == global
 */

// 'use strict';

let obj = { result: 0 };
let self;
console.log('1.global', this); // Node.js 환경에서는 {} || global

obj.add = function (x, y) {
  console.log('2-1.this', this); // 호출한 현재 대상을 가르킴 vs (es6) 호출한 현재 대상을 가르킴
  function inner() {
    self = this;
    console.log('2-2.this', this); // global vs (es6) 내부함수에서의 this는 undefined
    this.result = x + y;
    console.log('3.this.result', this.result);
  }
  inner();
};

obj.add(3, 4);
console.log('4.obj', obj);
console.log('5.result', result); // global 객체의 result vs (es6) 변수로써의  result

console.log('6.obj.result', obj.result);

console.log('7.this', this); // {}
console.log('8.this.result', this.result); // {} 객체의 result

console.log('9.self', self); // global 객체의 result vs (es6) 변수로써의  result
console.log('10.self.result', self.result);
