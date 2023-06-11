const a = new Promise((resolve, reject) => {
    console.log('promise1')
    resolve()
  }).then(() => {
    console.log('promise2')
  })
  
  const b = new Promise(async (resolve, reject) => {
    await a
    console.log('after1')
    await b
    console.log('after2')
    resolve()
  })
  
  console.log('end');

//   promise1
//  after1
// after2
// end
// promise2