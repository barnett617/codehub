var NumMatrix = function(matrix) {
  this.sums = [];
  if (!matrix.length || !matrix[0].length) return;

  let rows = new Array(matrix.length + 1).fill([]);
  rows = rows.map(row => new Array(matrix[0].length + 1).fill(0));
  this.sums = rows;
  const sums = this.sums;

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      rowSum += matrix[i][j];
      sums[i + 1][j + 1] = sums[i][j + 1] + rowSum;
    }
  }
  
}

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const sums = this.sums;
  if (sums) {
    return sums[row2 + 1][col2 + 1] - sums[row1][col2 + 1] - sums[row2 + 1][col1] + sums[row1][col1];
  }
};

// [3,0,1,4,2],
// [5,6,3,2,1],
// [1,2,0,1,5],
// [4,1,0,1,7],
// [1,0,3,0,5]

(function () {
  const testcase = {
    matrix: [
      [3,0,1,4,2],
      [5,6,3,2,1],
      [1,2,0,1,5],
      [4,1,0,1,7],
      [1,0,3,0,5]
    ],
    region: [
      [2,1,4,3],
      [1,1,2,2],
      [1,2,2,4]
    ],
    expect: [8, 11, 12]
  }
  const result = [];
  console.time('calc');
  testcase.region.forEach((region, index) => {
    const matrix = new NumMatrix(testcase.matrix);
    result.push({
      input: JSON.stringify({ matrix: testcase.matrix, region }),
      expect: testcase.expect[index],
      output: matrix.sumRegion(region[0], region[1], region[2], region[3])
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()