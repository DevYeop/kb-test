let obj = { result: 0 };
console.log('this global', this); // Node.js 환경에서는 {} 혹은 global, but in strict mode it could be undefined

obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
    console.log('this', this); // this will be undefined in strict mode or window/global in non-strict mode
    console.log('this.result', this.result); // will throw an error in strict mode
  }
  inner();
};

obj.add(3, 4);
console.log('obj', obj);
console.log('result', result); // will throw an error, since result is not defined in this scope
console.log('obj.result', obj.result); // will print 0
console.log('this.result', this.result); // will print undefined
console.log('this', this); // global object in non-strict mode, undefined in strict mode
