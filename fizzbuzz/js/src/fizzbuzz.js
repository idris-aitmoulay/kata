const isInt = str => (typeof str === "number" && Number.isInteger(str)) || (typeof str === 'string' && Number.isInteger(parseFloat(str)));

const fizzbuzz = value  => {
  const isInFizzBuzzValues = (typeof value === 'string' && ['Buzz', 'Fizz', 'FizzBuzz'].includes(value));
  if (!(isInt(value) || isInFizzBuzzValues)) {
    throw new Error(`${value} is non acceptable by fizzbuzz function as param`);
  }

  if (isInFizzBuzzValues) return `${value}`;

  const usedValue = (typeof value === 'string') ? parseInt(value): value;

  const divisibleBy3 = usedValue % 3 === 0, divisibleBy5 = usedValue % 5 === 0;

  if (divisibleBy3 && divisibleBy5) return 'FizzBuzz';

  if (divisibleBy3) return 'Fizz';

  if (divisibleBy5) return 'Buzz';

  return `${usedValue}`;
};

module.exports = fizzbuzz;
