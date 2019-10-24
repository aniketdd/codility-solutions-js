function solution(A) {
  const sum = A.length <= 1 ? A[0] || 0 : A.reduce((a, b) => a + b);
  let diff = Infinity;
  let left = 0;
  let right = sum;
  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    diff = Math.min(diff, Math.abs(left - right));
  }
  return diff;
}

// solution([3, 1, 2, 4, 3]);
// solution([]);
// solution([1]);
solution([1000, -1000]);
