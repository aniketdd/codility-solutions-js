function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const result = [];
  for (let i = 0; i < P.length; i++) {
    const substr = S.slice(P[i], Q[i] + 1);

    if (~substr.indexOf("A")) {
      result.push(1);
    } else if (~substr.indexOf("C")) {
      result.push(2);
    } else if (~substr.indexOf("G")) {
      result.push(3);
    } else {
      result.push(4);
    }
  }
  return result;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
