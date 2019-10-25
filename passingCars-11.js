function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0,
    ones = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i]) {
      ones++;
    }
  }
  for (let i = 0; i < A.length - 1; i++) {
    const current = A[i];
    if (!A[i]) {
      count += ones;
    } else {
      ones--;
    }
  }
  return count > 1000000000 ? -1 : count;
}
