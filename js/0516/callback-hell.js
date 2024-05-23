function doTask1(callback) {
  setTimeout(() => {
    console.log('Task 1 완료');
    callback();
  }, 1000);
}

function doTask2(callback) {
  setTimeout(() => {
    console.log('Task 2 완료');
    callback();
  }, 1000);
}

function doTask3(callback) {
  setTimeout(() => {
    console.log('Task 3 완료');
    callback();
  }, 1000);
}

doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log('모든 작업 완료');
    });
  });
});
