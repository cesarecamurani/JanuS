const colors = require('colors');

const judge = (title, cb) => {
  try{
    cb();
    console.log(`${' Passed '.bgGreen.black} ${title.green}`);
  } catch(e) {
    console.log(`${' Failed '.bgRed.black} ${title.red}`);
    console.log(e.stack.red);
  }
};

const verify = (val) => {
  if (val) return true;

  throw new Error('Assertion failed.');
};

const xjudge = (title, cb) => {
  console.log(`${' Not Judged '.bgWhite.black} ${title.gray}`);
};

module.exports = { verify, judge, xjudge };
