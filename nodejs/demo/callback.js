function a (callback) {
  const msg = 'hello';
  callback(msg);
}

function b (msg) {
  console.log(msg);
}

a(b);