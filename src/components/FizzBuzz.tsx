import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const [mynumber, setNumber] = useState<number>(1);
  const [oldNumber, setOldNumber] = useState<(number | string)[]>([]);

  const FizBuzzify = () => {
    setNumber((previousNumber) => previousNumber + 1);
    if (mynumber % 15 === 0) {
      setOldNumber((oldNumber) => [...oldNumber, "FizzBuzz"]);
    } else if (mynumber % 5 === 0) {
      setOldNumber((oldNumber) => [...oldNumber, "Buzz"]);
    } else if (mynumber % 3 === 0) {
      setOldNumber((oldNumber) => [...oldNumber, "Fizz"]);
    } else {
      setOldNumber((oldNumber) => [...oldNumber, mynumber]);
    }
  };

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>FizzBuzz: {oldNumber.join(", ")}</p>
      <button onClick={FizBuzzify}>NEXT</button>
    </>
  );
}
