function* testGenerator() {
    yield 'hello';
    yield 'world';
    yield 'end';
}

var fn = testGenerator();

// console.log(fn.next());
// console.log(fn.next());
// console.log(fn.next());
// console.log(fn.next());

// { value: 'hello', done: false }
// { value: 'world', done: false }
// { value: 'end', done: false }
// { value: undefined, done: true }

function * testGenerator2() {
    console.log(1);
    yield 2;
    yield console.log(3);
    console.log(4);
}

var fn2 = testGenerator2();

// console.log(fn2.next());
// console.log(fn2.next());
// console.log(fn2.next());
// console.log(fn2.next());

// 1
// { value: 2, done: false }
// 3
// { value: undefined, done: false }
// 4
// { value: undefined, done: true }
// { value: undefined, done: true }

/**
 * 由此可见，generator用来控制异步发生的事情
 * 并通过next逐步得到结果
 * 当执行结果一旦变为done之后，后续获取到的值都是undefined
 */

function* testGenerator3() {
    console.log(1);
    yield setTimeout(() => {
        console.log(2);
    })
    yield console.log(3);
    setTimeout(function () {
        console.log(5);
    })
    console.log(4);
}

var fn3 = testGenerator3();

// console.log(fn3.next());

// 1
// {
//   value: Timeout {
//     _idleTimeout: 1,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 52,
//     _onTimeout: [Function (anonymous)],
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(refed)]: true,
//     [Symbol(asyncId)]: 5,
//     [Symbol(triggerId)]: 1
//   },
//   done: false
// }
// 2

console.log(fn3.next());
console.log(fn3.next());
console.log(fn3.next());
console.log(fn3.next());

// 1
// {
//   value: Timeout {
//     _idleTimeout: 1,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 50,
//     _onTimeout: [Function (anonymous)],
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(refed)]: true,
//     [Symbol(asyncId)]: 5,
//     [Symbol(triggerId)]: 1
//   },
//   done: false
// }
// 3
// { value: undefined, done: false }
// 4
// { value: undefined, done: true }
// { value: undefined, done: true }
// 2
// 5