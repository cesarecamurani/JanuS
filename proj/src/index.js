const colors = require('colors');

const summary = { success: 0, fail: 0, disabled: 0 };

const judge = (title, cb) => {
  try{
    cb();
    console.log(`${' Passed '.bgGreen.black} ${title.green}`);
    summary.success++;
  } catch(e) {
    console.log(`${' Failed '.bgRed.black} ${title.red}`);
    console.log(e.stack.red);
    summary.fail++;
  }
};

const xjudge = (title, cb) => {
  console.log(`${' Not Judged '.bgWhite.black} ${title.gray}`);
  summary.disabled++;
};

const verify = (val) => {
  if (val) return true;

  throw new Error('Assertion failed.');
};

const judgement = () => {
  console.log(`\n.......\n`);
  console.log('Final Judgement:\n');
  console.log(`  Passed: ${summary.success}`.green);
  console.log(`  Failed: ${summary.fail}`.red);
  console.log(`  Not Judged: ${summary.disabled}\n\n`.gray);

  if (summary.fail > 0) process.exit(1);
  process.exit(0);
};

module.exports = { verify, judge, xjudge, judgement };
