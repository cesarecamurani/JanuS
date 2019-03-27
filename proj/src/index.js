const check = (title, cb) => {
  try{
    cb();
    console.log(`Passed ${title}`);
  } catch(e) {
    console.log(`Failed ${title}`);
    console.log(e.stack);
  }
};

const verify = (val) => {
  if (val) return true;

  throw new Error('Assertion failed.');
};

module.exports = { verify, check };
