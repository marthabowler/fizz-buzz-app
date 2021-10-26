const NextFizzBuzz = (arr: (number | string)[]): (number | string)[] => {
  const number = arr.length + 1;
  let arr2 = [];
  if (number % 15 === 0) {
    arr2 = [...arr, "FizzBuzz"];
  } else if (number % 5 === 0) {
    arr2 = [...arr, "Buzz"];
  } else if (number % 3 === 0) {
    arr2 = [...arr, "Fizz"];
  } else {
    arr2 = [...arr, number];
  }
  return arr2;
};
export default NextFizzBuzz;
