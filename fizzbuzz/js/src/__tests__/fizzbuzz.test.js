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
})
