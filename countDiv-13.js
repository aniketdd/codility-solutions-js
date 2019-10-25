function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0,
    start = A;
  while (start <= B) {
    if (start % K) {
      start++;
    } else {
      count++;
      break;
    }
  }
  if (start < B) {
    count += Math.floor((B - start) / K);
  }
  return count;
}

console.log(solution(1, 1, 11));
