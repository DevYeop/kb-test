console.log('1.동기 코드 시작');

/**
 * 
 * 
 1.동기 코드 시작
2.Promise 생성자 내부 코드 실행
2.동기 코드 끝
결과: 잘 끝났음
 */
function executeAsyncTask() {
  const isError = 1;
  console.log('2.Promise 생성자 내부 코드 실행');
  if (isError) {
    throw new Error('Promise 에러 발생'); // reject
  } else {
    return '잘 끝났음'; // resolve
  }
}

// (async () => {
//   try {
//     const result = await executeAsyncTask();
//     console.log('결과:', result);
//   } catch (error) {
//     console.error('에러 발생:', error.message);
//   }
// })();

try {
  const result = executeAsyncTask();
  console.log('결과:', result);
} catch (error) {
  console.error('에러 발생:', error.message);
}

console.log('2.동기 코드 끝');
