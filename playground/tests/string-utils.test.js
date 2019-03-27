// tyrion/playground/tests/string-utils.test.js

const { verify, check } = require('janus');
const stringUtils = require('../src/string-utils');

// method: capitalizeFirstLetter
check('capitalizes the first letter of a string', () => {
  verify(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
});

check('don\'t change the case of the remaining characters', () => {
  verify(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');
});

// method: isBlank
check('returns true when passing an empty string', () => {
  verify(stringUtils.isBlank(''));
});
check('returns true when passing a string containing only spaces', () => {
  verify(stringUtils.isBlank('      '));
});
check('returns false when passing a non-blank string', () => {
  verify(!stringUtils.isBlank('whatever'));
});

// method: startsWith
check('returns true when it starts with the passed string', () => {
  verify(stringUtils.startsWith('Just when I...', 'Just'));
});

check('returns false when it contains the passed string, but doesn\'t start with it', () => {
  verify(!stringUtils.startsWith('Just when I...', 'when I'));
});

check('returns false when it doesn\'t contain the passed string', () => {
  verify(!stringUtils.startsWith('Just when I...', 'corleone'));
});
