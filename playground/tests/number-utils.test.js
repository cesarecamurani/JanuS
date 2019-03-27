const { verify, judge, xjudge, group } = require('janus');
const numberUtils = require('../src/number-utils');

// method: isPrime
group('numberUtils', () => {
  group('method: isPrime', () => {
    judge('returns true for prime numbers', () => {
      verify(numberUtils.isPrime(2));
      verify(numberUtils.isPrime(3));
      verify(numberUtils.isPrime(5));
      verify(numberUtils.isPrime(7));
      verify(numberUtils.isPrime(23));
    });

    judge('returns false for non-prime numbers', () => {
      verify(!numberUtils.isPrime(4));
      verify(!numberUtils.isPrime(8));
      verify(!numberUtils.isPrime(10));
      verify(!numberUtils.isPrime(20));
    });
  });
});
