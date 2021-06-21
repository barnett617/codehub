// use case
Promise.all([
  fetch('/api/a'),
  fetch('/api/b'),
  fetch('/api/c')
]).then([resA, resB, resC] => {
  // use all results
})