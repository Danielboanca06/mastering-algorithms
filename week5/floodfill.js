/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let original = image[sr][sc];
  function rec(image, sr, sc) {
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== original ||
      image[sr][sc] === color
    ) {
      return image;
    }

    image[sr][sc] = color;

    rec(image, sr + 1, sc);
    rec(image, sr - 1, sc);
    rec(image, sr, sc + 1);
    rec(image, sr, sc - 1);

    return image;
  }
  return rec(image, sr, sc);
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
