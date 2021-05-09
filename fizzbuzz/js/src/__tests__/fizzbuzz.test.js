const fizzbuzz = require('../fizzbuzz');

describe('fizzbuzz function', () => {
  it('throwing Error: for non acceptable string Fiz is not in [Fizz, Buzz, FizzBuzz]', () => {
    expect(() => {
      fizzbuzz('Fiz')
    }).toThrow("Fiz is non acceptable by fizzbuzz function as param")
  })

  it('throwing Error: for non int number, (12.5 is string of float)', () => {
    expect(() => {
      fizzbuzz('12.5')
    }).toThrow("12.5 is non acceptable by fizzbuzz function as param")
  })

  it('throwing Error: for non int number (12.5 is float)', () => {
    expect(() => {
      fizzbuzz(12.5)
    }).toThrow("12.5 is non acceptable by fizzbuzz function as param")
  })

  it('test: given Fizz, Buzz or FizzBuzz it should return the same value', () => {
    expect(fizzbuzz('Fizz')).toStrictEqual('Fizz')
    expect(fizzbuzz('Buzz')).toStrictEqual('Buzz')
    expect(fizzbuzz('FizzBuzz')).toStrictEqual('FizzBuzz')
  })


  it('given non divisible int by 3, 5 or 15 it should return string of given number', () => {
    expect(fizzbuzz(13)).toStrictEqual('13')
  })

  it('given divisible int by only 3 not 5 it should return Fizz', () => {
    expect(fizzbuzz(12)).toStrictEqual('Fizz')
  })

  it('given divisible int by only 5 not 3 it should return Buzz', () => {
    expect(fizzbuzz(5)).toStrictEqual('Buzz')
  })

  it('given divisible int by  15 it should return FizzBuzz', () => {
    expect(fizzbuzz(30)).toStrictEqual('FizzBuzz')
  })

  it('test fizzbuzz is an Idempotency function', () => {
    expect(fizzbuzz(fizzbuzz(30))).toStrictEqual(fizzbuzz(30))
    expect(fizzbuzz(fizzbuzz(5))).toStrictEqual(fizzbuzz(5))
    expect(fizzbuzz(fizzbuzz(12))).toStrictEqual(fizzbuzz(12))
    expect(fizzbuzz(fizzbuzz(13))).toStrictEqual(fizzbuzz(13))
  })
})
