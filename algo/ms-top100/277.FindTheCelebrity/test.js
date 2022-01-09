// const solution = require('./solution1')
const solution = require('./solution2')

const testcase = [
  {
    input: [[1,1,0],[0,1,0],[1,1,1]],
    expect: 1
  },
  {
    input: [[1,0,1],[1,1,0],[0,1,1]],
    expect: -1
  }
]

// How to mock the testcase running
function localCalc(solution, testcase) {
  const output = [];
  testcase.forEach(test => {
    const { input } = test;
    const n = input.length;
    
    const map = {}

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        const cur = input[i][j];
        if (cur === 1) {
          map[`${i} -> ${j}`] = true
        } else {
          map[`${i} -> ${j}`] = false;
        }
      }
    }

    var knows = function(a, b) {
      const key = `${a} -> ${b}`;
      const knowsMap = map;
      return knowsMap[key];
    }

    const executor = solution(knows)
    const result = executor(n);

    output.push({
      input: JSON.stringify(input),
      expect: test.expect,
      output: result
    })
  })
  console.table(output);
}

localCalc(solution, testcase)