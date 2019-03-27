// tyrion/playground/tests/number-utils.test.js

const { verify } = require('tyrion');
const numberUtils = require('../src/number-utils');

// Group: isPrime method
// Test: returns true for prime numbers
verify(numberUtils.isPrime(2));
verify(numberUtils.isPrime(3));
verify(numberUtils.isPrime(5));
verify(numberUtils.isPrime(7));
verify(numberUtils.isPrime(23));
// Test: returns false for non-prime numbers
verify(!numberUtils.isPrime(4));
verify(!numberUtils.isPrime(8));
verify(!numberUtils.isPrime(10));
verify(!numberUtils.isPrime(20));
