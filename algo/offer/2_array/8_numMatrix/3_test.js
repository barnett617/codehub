var NumMatrix = function(matrix) {
  // 0.判空
  if (!matrix.length || !matrix[0].length) return;
  // 1.创建一个比原矩阵大一级的辅助矩阵
  this.sums = Array(matrix.length + 1).fill(null)
                                      .map(() => Array(matrix[0].length + 1).fill(0));
  // 2.遍历矩阵的每一位，并将每个点的自左上角的加和进行记录
  const sums = this.sums;
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      rowSum += matrix[i][j];
      sums[i + 1][j + 1] = rowSum + sums[i][j + 1];
    }
  }
}

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // 3.用右下角位置的总和 + 上一行当前列的总和 + 上一列当前行的总和 - 上一列上一行的总和
  const sums = this.sums;
  return sums[row2 + 1][col2 + 1] - sums[row1][col2 + 1] - sums[row2 + 1][col1] + sums[row1][col1]; 
};

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
