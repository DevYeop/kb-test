console.log('1.동기 코드 시작'); // 1

function executeAsyncTask(callback) {
  console.log('2.비동기 작업 시작'); // 2
  setTimeout(() => {
    console.log('4.비동기 작업 완료'); // 4
    callback('5.작업 완료'); //5
  }, 1000);
}

executeAsyncTask((result) => {
  console.log(result); // 5
});

console.log('3.동기 코드 끝'); // 3
