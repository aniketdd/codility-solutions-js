function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const posArr = A.filter(a => a > 0).sort((a, b) => a - b);
  const distinctArr = Array.from(new Set(posArr));
  for (let i = 0; i < distinctArr.length; i++) {
    if (distinctArr[i] != i + 1) {
      return i + 1;
    }
  }
  return distinctArr.length + 1;
}
