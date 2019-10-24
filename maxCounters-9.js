function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = new Array(N).fill(0);
  let currentMax = 0;
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] > N) {
      if (currentMax > 0) {
        // arr = arr.map(() => currentMax);
        for (let j = 0; j < N; j += 1) {
          arr[j] = currentMax;
        }
      }
    } else {
      arr[A[i] - 1] = arr[A[i] - 1] + 1;
      currentMax = currentMax >= arr[A[i] - 1] ? currentMax : arr[A[i] - 1];
    }
  }
  return arr;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(5, [1]));
