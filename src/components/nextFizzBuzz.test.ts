import NextFizzBuzz from "./nextFizzBuzz";

test("the fizzbuzz game", () => {
  expect(NextFizzBuzz([1, 2, "Fizz"])).toStrictEqual([1, 2, "Fizz", 4]);
  expect(NextFizzBuzz([1, 2, "Fizz", 4])).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
  ]);
});
