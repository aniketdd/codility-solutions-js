function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let step = 1;
  // const st = new Array(X);
  const st = new Set();
  for (let i = 0; i < A.length; i++) {
    st.add(A[i]);
    if (st.size == X) {
      return i;
    }
    // st[A[i]] = A[i];
    // let complete = true;
    // for (let j = 1; j <= X; j++) {
    //   if (!st[j]) {
    //     complete = false;
    //     break;
    //   }
    // }
    // if (complete) {
    //   return i;
    // }
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(2, [2, 2, 2, 2, 2, 2]));
