const colors = require('colors');

const repeat = (str, n) => Array(n).join(str);
const indent = n => repeat('    ', n);
const indentLines = (str, n) => indent(n) + str.replace(/\n/g, `\n${indent(n)}`);

const summary = { success: 0, fail: 0, disabled: 0 };

let indentLevel = 0;

const group = (title, cb) => {
  indentLevel++;
  console.log(`\n${indent(indentLevel)}⇨ ${title}`.blue);
  cb();
  indentLevel--;
};

const judge = (title, cb) => {
  try{
    cb();
    console.log(`${indent(indentLevel + 1)}${' Passed '.bgGreen.black} ${title.green}`);
    summary.success++;
  } catch(e) {
    console.log(`${indent(indentLevel + 1)}${' Failed '.bgRed.black} ${title.red}`);
    console.log(indentLines(e.stack.red, indentLevel + 1));
    summary.fail++;
  }
};

const xjudge = (title, cb) => {
  console.log(`${indent(indentLevel + 1)}${' Not Judged '.bgWhite.black} ${title.gray}`);
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

module.exports = { verify, judge, xjudge, judgement, group };
