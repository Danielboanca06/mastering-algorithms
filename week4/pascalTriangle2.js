/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let t = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    let row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = t[i - 1][j - 1] + t[i - 1][j];
    }
    t.push(row);
  }

  return t[rowIndex];
};

console.log(getRow(0));
