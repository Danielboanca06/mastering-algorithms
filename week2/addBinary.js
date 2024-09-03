var addBinary = function (a, b) {
  if (a.length > b.length) {
    b = [...new Array(a.length - 1).fill(0), b.split("")];
    a = a.split("");
  } else if (b.length > a.length) {
    a = [...new Array(b.length - 1).fill(0), a.split("")];
    b = b.split("");
  } else {
    a = a.split("");
    b = b.split("");
  }

  let remiander = 0;
  let res = [];

  console.log(a, b);

  for (let i = a.length - 1; i >= 0; i--) {
    let first = parseInt(a[i]);
    let last = parseInt(b[i]);
    if (first === 1 && last === 1) {
      res.unshift(0 + remiander);
      remiander = 1;
    } else if (
      (first === 1 && remiander == 1) ||
      (last === 1 && remiander == 1)
    ) {
      res.unshift(0);
      remiander = 1;
    } else {
      res.unshift(last + first + remiander);
      remiander = 0;
    }
  }
  if (remiander == 1) {
    res.unshift(1);
  }
  return res.join("");
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinaryo = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  return (BigInt(aBin) + BigInt(bBin)).toString(2);
};

console.log(addBinaryo("11", "1"));
