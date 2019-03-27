const verify = (val) => {
  if (val) return true;

  throw new Error('Assertion failed.');
};

module.exports = { verify };
