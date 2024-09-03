/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const distances = points.map((point) => ({
    point: point,
    distance: Math.sqrt(point[0] * point[0] + point[1] * point[1]), // Euclidean distance
  }));

  // Sort the distances array based on distance
  distances.sort((a, b) => a.distance - b.distance);

  // Extract the first k points from the sorted array
  const kClosestPoints = distances.slice(0, k).map((item) => item.point);

  return kClosestPoints;
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
