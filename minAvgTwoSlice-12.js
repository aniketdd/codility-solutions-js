function solution(A) {
  let avg = Infinity,
    index;
  for (let i = 0; i <= A.length - 3; i++) {
    let prevSum = A[i];
    for (let j = i + 1; j <= i + 2; j++) {
      prevSum += A[j];
      let sliceAvg = prevSum / (j - i + 1);
      if (sliceAvg < avg) {
        index = i;
        avg = sliceAvg;
      }
    }
  }
  if (A.length >= 2) {
    const lastTwoSums = (A[A.length - 2] + A[A.length - 1]) / 2;
    if (lastTwoSums < avg) {
      return A.length - 2;
    }
  }

  return index;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
