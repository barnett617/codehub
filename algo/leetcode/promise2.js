const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
  })
  setTimeout(() => console.log(3), 0)
  throw new Error('123');
  promise.then(() => {
    console.log(4)
  })

//   1
// 2
// 123
// 3