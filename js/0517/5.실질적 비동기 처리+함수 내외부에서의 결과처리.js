const axios = require('axios'); // axios 모듈 불러오기
// npm i axios 해야 됨니다 ㅇㅇ
console.log('1.동기 코드 시작');

let json_result = null;

async function executeAsyncTask() {
  try {
    console.log('2.API 호출 시작');
    const response = await axios.get(
      // await까지 깜빡했다면????????
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    console.log('4.API 호출 완료');
    console.log('5.함수 내부에서 데이터 출력:', response.data);
    //response 만 해보면 promise 객체가 잇긴하다. 아래 함수외부에서는 undefined이 나오는이유는?
    // json_result = response.data;
    // console.log('json_result', json_result);
    return response.data;
  } catch (error) {
    console.error('API 호출 에러:', error);
  }
}

// case1
const result = executeAsyncTask();
console.log('함수 외부에서 데이터 출력 : ', result);

let result2 = null;

//case2;
executeAsyncTask().then((result) => {
  result2 = result;
  console.log('object-right-case', result2);
});

console.log('object-wrong-case', result2);

console.log('3.동기 코드 끝');
