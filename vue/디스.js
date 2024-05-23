const result = 0;
let obj = { result: 0 };
console.log('this global:', this);
obj.add = function (x, y) {
  function inner() {
    // this.result = x + y;
    console.log(this);
  }
  inner();
};
obj.add(3, 4);
console.log(obj);
console.log(result);
