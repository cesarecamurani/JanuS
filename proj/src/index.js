const colors = require('colors');

const summary = { success: 0, fail: 0, disabled: 0 };

const judge = (title, cb) => {
  try{
    cb();
    console.log(`${' OK '.bgGreen.black} ${title.green}`);
    summary.success++;
  } catch(e) {
    console.log(`${' FAIL '.bgRed.black} ${title.red}`);
    console.log(e.stack.red);
    summary.fail++;
  }
};

const xjudge = (title, cb) => {
  console.log(`${' DISABLED '.bgWhite.black} ${title.gray}`);
  summary.disabled++;
};

const verify = (val) => {
  if (val) return true;

  throw new Error('Assertion failed.');
};

const judgement = () => {
  console.log(`\n.......\n`);
  console.log('Test summary:\n');
  console.log(`  Success: ${summary.success}`.green);
  console.log(`  Fail: ${summary.fail}`.red);
  console.log(`  Disabled: ${summary.disabled}\n\n`.gray);

  if (summary.fail > 0) process.exit(1);
  process.exit(0);
};

module.exports = { verify, judge, xjudge, judgement };
