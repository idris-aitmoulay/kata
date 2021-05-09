const fizzbuzz = require('./fizzbuzz');

// Implement the wrapper so we can count from 0 to STOP.
function main() {
   for(let i=0; i<10;i++) {
     console.log(fizzbuzz(i));
   }
}

main();
