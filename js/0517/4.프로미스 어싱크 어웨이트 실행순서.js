const somePromise = () => {
  return new Promise((resolve, reject) => {
    console.log('Promise 생성자 내부 코드 실행'); // promise내 코드는 동기적으로 실행됨
    resolve('Promise 완료');
    // 호출은 됐지만 promise 상태를 완료상태로만 바꾸고 아무일도 안 일어남
    console.log('Promise 생성자 내부 코드 실행2');
  });
};

const promise = async function example() {
  console.log('첫 번째 줄');
  await somePromise().then((result) => console.log(`5.${result}`));
  console.log('두 번째 줄');
  console.log('세 번째 줄');
};

promise();

console.log('4.마지막 번째 줄');
