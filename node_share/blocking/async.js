console.log('hi');

setTimeout(function() {
  console.log('timeout');
}, 5000);

console.log('end');

// hi
// end
// 5sec later
// timeout