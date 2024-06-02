import once from './once.mjs';

function print(content) {
  console.log(content)
}

const oncePrint = once(print)

for (let i = 0; i < 5; i++) {
  oncePrint(i)
}

