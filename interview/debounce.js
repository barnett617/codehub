// debounce throttle

function debounce(fn, delay, execAuto) {
    let timerId = null;
    let self = this;
    // let result;
    return function(...args) {
        if (execAuto) {
            fn.apply(self, args);
        }
        if (!timerId) {
            timerId = setTimeout(function () {
                if (execAuto) return;
                fn.apply(self, args);
                timerId = null;
                // return result;
            }, delay)
        }
    }
}

function doSomething() {
    let timeStart, timeEnd
    setTimeout(() => {
        timeStart = Date.now()
        console.log(timeStart)
    }, 50)
    setTimeout(() => {
        timeEnd = Date.now()
        console.log(timeEnd, 'gap', timeEnd - timeStart)
        timeStart = timeEnd
    }, 150)
    setTimeout(() => {
        timeEnd = Date.now()
        console.log(timeEnd, 'gap', timeEnd - timeStart)
    }, 550)
}

function simpleDo() {
    console.log(1)
}

function frequentDo(fn) {
    setInterval(function () {
        fn()
    }, 500)
}

async function main() {
    // doSomething();

    // const debouncedAction = debounce(simpleDo, 1000, true)
    // debouncedAction();

    const debouncedAction2 = debounce(simpleDo, 1000, true)
    debouncedAction2()
    setTimeout(async () => {
        debouncedAction2()
        await sleep(100)
        debouncedAction2()
        await sleep(100)
        debouncedAction2()
        setTimeout(() => {
            debouncedAction2()
        }, 1100)
    }, 500)

    // frequentDo(debouncedAction2)
}

function sleep(time) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            resolve()
        }, time)
    })
}

main()