// tyrion/playground/tests/string-utils.test.js

const { verify } = require('janus');
const stringUtils = require('../src/string-utils');

// Group: capitalizeFirstLetter method
// Test: capitalizes the first letter of a string
verify(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
// Test: don't change the case of the remaining characters
verify(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');

// Group: isBlank method
// Test: returns true when passing an empty string
verify(stringUtils.isBlank(''));
// Test: returns true when passing a string containing only spaces
verify(stringUtils.isBlank('      '));
// Test: returns false when passing a non-blank string
verify(!stringUtils.isBlank('whatever'));

// Group: startsWith method
// Test: returns true when it starts with the passed string
verify(stringUtils.startsWith('Just when I...', 'Just'));
// Test: returns false when it contains the passed string, but doesn't start with it
verify(!stringUtils.startsWith('Just when I...', 'when I'));
// Test: returns false when it doesn't contain the passed string
verify(!stringUtils.startsWith('Just when I...', 'corleone'));
