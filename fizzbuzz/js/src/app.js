const fizzbuzz = require('./fizzbuzz');

// Implement the wrapper so we can count from 0 to STOP.
function main() {
  const testDataSet = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz"]
  testDataSet.forEach((item, index) => {
    console.log('(given: ', item, ', item result: ',fizzbuzz(item), ',index + 1: ', index+1, ',index + 1 result: ',fizzbuzz(index+1))
  });
}

main();
