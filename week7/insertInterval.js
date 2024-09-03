/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let start = 0;
  let end = intervals.length - 1;
  while (start <= end) {
    let middle = ~~((start + end) / 2);
    if (intervals[middle][0] <= newInterval[0]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  intervals.splice(start, 0, newInterval);
  let i = start;
  while (i < intervals.length) {
    if (i > 0 && intervals[i - 1][1] >= intervals[i][0]) {
      intervals.splice(i - 1, 2, [
        Math.min(intervals[i - 1][0], intervals[i][0]),
        Math.max(intervals[i - 1][1], intervals[i][1]),
      ]);
    } else {
      i += 1;
    }
  }
  return intervals;
};

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);

var insert = function (intervals, newInterval) {
  let merged = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ];
    i++;
  }
  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};
