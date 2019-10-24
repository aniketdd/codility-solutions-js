function solution(A) {
  const st = new Set();
  for (let item of A) {
    if (st.has(item)) {
      st.delete(item);
    } else {
      st.add(item);
    }
  }
  return st.size ? Array.from(st)[0] : undefined;
}
