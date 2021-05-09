const isInt = str => (typeof str === "number" && Number.isInteger(str)) || (typeof str === 'string' && Number.isInteger(parseFloat(str)));

const fizzbuzz = value  => {
  const isInFizzBuzzValues = (typeof value === 'string' && ['Buzz', 'Fizz', 'FizzBuzz'].includes(value));
  if (!(isInt(value) || isInFizzBuzzValues)) {
    throw new Error(`${value} is non acceptable by fizzbuzz function as param`);
  }

  return '0'
};

module.exports = fizzbuzz;
