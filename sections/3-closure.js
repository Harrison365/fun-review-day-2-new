function generateMultiples() {}

function secureFunc(password, func) {
  function innerFunc(attempt2, ...args) {
    if (password === attempt2) {
      return func(...args);
    }
    return "Sorry your password is incorrect!";
  }
  return innerFunc;
}

module.exports = { generateMultiples, secureFunc };
