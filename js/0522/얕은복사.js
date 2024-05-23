// let obj1 = { name: '박문수', age: 29 };
// let obj2 = obj1; //shallow copy! obj1, obj2는 동일한 객체를 참조
// let obj3 = { ...obj1 }; //객체 내부의 값은 복사하지만 obj3, obj1은 다른 객체
// let obj4 = { ...obj1, email: 'mspark@gmail.com' }; //새로운 속성 추가

// obj2.age = 19;
// obj2.name = '이상엽';

// console.log(obj1); //{ name:"박문수", age:19 }
// console.log(obj2); //{ name:"박문수", age:19 } obj1과 동일!!
// console.log(obj3); //{ name:"박문수", age:29 } age가 바뀌지 않음
// console.log(obj1 == obj2); //true
// console.log(obj1 == obj3); //false

// let arr1 = [100, 200, 300];
// let arr2 = ['hello', ...arr1, 'world'];
// console.log(arr1); // [ 100, 200, 300 ]
// console.log(arr2); // [ "hello", 100, 200, 300, "world" ]

// 원본 객체
let obj_origin = {
  name: '박문수',
  age: 29,
  address: {
    city: '서울',
    zip: '12345',
  },
};

let obj_copy1 = obj_origin; // 참조 복사

let obj_copy2 = { ...obj_origin };
let obj_copy3 = {
  name: '박문수',
  age: 29,
};

// console.log(obj_origin == obj_copy1); // true
// console.log(obj_origin == obj_copy2); // true >> false
// console.log(obj_origin == obj_copy3); // true >> false

// 속성 값 변경 테스트
obj_copy2.name = '김철수';
obj_copy2.age = 44;
obj_copy3.address.city = '부산';

console.log(obj_origin); // { name: "박문수", age: 29, address: { city: "부산", zip: "12345" } } - 원본
console.log(obj_copy1); // { name: "박문수", age: 29, address: { city: "부산", zip: "12345" } } - 참조복사
console.log(obj_copy2); // { name: "김철수", age: 44, address: { city: "부산", zip: "12345" } } - 얕은복사
console.log(obj_copy3); // { name: "박문수", age: 29, address: { city: "부산", zip: "12345" } } - 얕은복사
