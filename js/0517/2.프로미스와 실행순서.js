console.log('1.동기 코드 시작');

// 1.동기 코드 시작
// 2.Promise 생성자 내부 코드 실행
// pass. Promise 생성자 내부 코드 실행2
// 3.동기 코드 끝
// Promise 완료

const promiseEx = new Promise((resolve, reject) => {
  // fullfiled 이행함 ==성공함 //
  console.log('2.Promise 생성자 내부 코드 실행'); // promise내 코드는 동기적으로 실행됨
  resolve('Promise 완료'); // 호출은 됐지만 promise 상태를 완료상태로만 바꾸고 아무일도 안 일어남
  reject('Promise 실패');

  console.log('3. Promise 생성자 내부 코드 실행2'); //
});

const promiseEx2 = new Promise((resolve) => {
  // fullfiled 이행함 ==성공함 //
  console.log('2.Promise 생성자 내부 코드 실행'); // promise내 코드는 동기적으로 실행됨
  resolve('Promise 완료'); // 호출은 됐지만 promise 상태를 완료상태로만 바꾸고 아무일도 안 일어남

  console.log('3. Promise 생성자 내부 코드 실행2'); //
});

promiseEx
  .then((result) => {
    // 아래 마지막 동기코드를 다 수행하고 나서야 시작됨
    console.log(result); // 55555555555555555555555555555
  })
  .catch((error) => {
    console.error(error); // 5
  });

console.log('4.동기 코드 끝');
