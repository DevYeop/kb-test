const fetchData = new Promise((resolve, reject) => {
  // 일반 함수와 달리 정의와 호출이 나뉘어져 있지 않고, 바로 시작된다
  setTimeout(() => {
    console.log('일단 시작');
    //   resolve('데이터를 성공적으로 가져왔습니다.');
    reject('데이터를 실패적으로 가져왔습니다.');
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result); // 데이터 가져오기 성공
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('추가 데이터를 처리했습니다.11');
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result); // 추가 데이터 처리 성공
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('추가 데이터를 처리했습니다.22');
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result); // 추가 데이터 처리 성공
  })
  .catch((error) => {
    console.error(error); // 오류 처리
  });

//////////////////////////////////////////////////////////////////////////////////////////

function startAsync(age) {
  return new Promise((starcraft, reject) => {
    console.log('일단시작!!!!!!!!!!');
    if (age > 20) starcraft();
    else reject();
  });
}

const promise1 = startAsync(25);
promise1
  .then(() => {
    console.log('1 then!');
  })
  .catch(() => {
    console.log('1 catch!');
  });

const promise2 = startAsync(15);
promise2
  .then(() => {
    console.log('2 then!');
  })
  .catch(() => {
    console.log('2 catch!');
  });
