const display = (result) => {
  console.log(`${result} 완료`);
};

const displayTest = () => {
  console.log('아무거나');
};
setTimeout(displayTest, 1000); // 매개변수가 없는 함수를 콜백으로 전달할 때
setTimeout(() => display('아메리카노'), 1000); // 매개변수가 있는 함수를 콜백으로 전달할 때
