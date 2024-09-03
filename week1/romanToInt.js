const romanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

// my solution
// O(n)

var romanToInt = function (s) {
  s.split(" ");
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (Object.hasOwn(romanNumerals, s[i] + s[i + 1])) {
      total += romanNumerals[s[i] + s[i + 1]];
      console.log();
      i++;
      continue;
    }

    total += romanNumerals[s[i]];
    console.log(total);
  }
  return total;
};

console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
