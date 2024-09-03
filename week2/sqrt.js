const mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

console.log(mySqrt(4));
console.log(mySqrt(8));

const mySqrto = function (x) {
  let dim = 1;
  while (dim * dim <= x) {
    dim++;
  }
  return dim - 1;
};

console.log(mySqrto(4));
console.log(mySqrto(16));
