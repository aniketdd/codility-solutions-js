function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const num = N.toString(2);
  const zeros = num.split("1");
  if (zeros.length <= 1) {
    return 0;
  }
  let maxLength = 0;
  for (let i = 0; i < zeros.length - 1; i++) {
    if (zeros[i] && zeros[i + 1] != undefined) {
      maxLength = Math.max(maxLength, z[i].length);
    }
  }
  return maxLength;
}

solution(15);
