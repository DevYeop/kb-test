function displayA() {
  console.log('A');
}

function displayB() {
  setTimeout(() => {
    console.log('B');
  }, 2000);
}

function displayB_2() {
  setTimeout(function () {
    console.log('B');
  }, 2000);
}

function displayC() {
  console.log('C');
}
displayA();
displayB();
displayC();
