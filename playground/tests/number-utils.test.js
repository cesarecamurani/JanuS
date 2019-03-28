const { verify, check, xcheck, group } = require('janus');
const numberUtils = require('../src/number-utils');

// method: isPrime
group('numberUtils', () => {
  group('method: isPrime', () => {
    check('returns true for prime numbers', () => {
      verify(numberUtils.isPrime(2));
      verify(numberUtils.isPrime(3));
      verify(numberUtils.isPrime(5));
      verify(numberUtils.isPrime(7));
      verify(numberUtils.isPrime(23));
    });

    check('returns false for non-prime numbers', () => {
      verify(!numberUtils.isPrime(4));
      verify(!numberUtils.isPrime(8));
      verify(!numberUtils.isPrime(10));
      verify(!numberUtils.isPrime(20));
    });
  });
});
