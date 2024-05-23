let human1 = {
  name: '홍길동',
  eat: function (food) {
    const name = '이상엽';
    console.log(this.name + '이 ' + food + '을/를 먹습니다.');
  },
};

let human2 = {
  name: '이상엽',
  eat: function (food) {
    const name = '김상엽';
    console.log(name + '이 ' + food + '을/를 먹습니다.');
  },
};

human2.eat('피자'); // 내가 피자를 먹는다

/**
콘텍스트(Context) : 코드가 실행되는 상황, 환경
할머니: 나는 허리가 아프다 ( 나 === 할머니 )
아버지: 나는 다리가 아프다 ( 나 === 아버지 )
어머니: 나는 머리가 아프다 ( 나 === 어머니 )
*/
