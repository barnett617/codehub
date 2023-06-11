function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

function print(content) {
  console.log(content);
}

print(hw.next());
// { value: 'hello', done: false }

print(hw.next());
// { value: 'world', done: false }

print(hw.next());
// { value: 'ending', done: true }

print(hw.next());
// { value: undefined, done: true }