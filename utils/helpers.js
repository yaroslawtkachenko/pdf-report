function timeoutPromise(timeout, paylaod) {
  return new Promise((resolve) => setTimeout(() => resolve(paylaod), timeout));
}

module.exports = {
    timeoutPromise,
};
