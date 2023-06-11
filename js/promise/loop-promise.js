function loopPromise() {

  const asyncTask = (taskNo) => {
    const delay = (Math.random() * 5).toFixed(2);
    console.info(`Task ${taskNo} will end in ${delay} seconds...`);
    setTimeout(() => {
      console.info(`Task ${taskNo} executed...`);
    }, delay);
  }


  const tasks = Array(10).fill(1).map(() => asyncTask);
  const taskCount = tasks.length;

  tasks.forEach(async (task, index) => {
    console.log(`Task ${index + 1} ready to execute...`);
    try {
      await task(index + 1);
    } catch (e) {
      console.error(`Task ${index + 1} fail because `, e);
    }
    console.log(`Task ${index + 1} finished...`);
  })

  console.log(`Task loop end`);

}

loopPromise();