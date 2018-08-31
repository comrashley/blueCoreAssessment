function unlock(start, end) {
  let rotations = 0;
  for (let i = 0; i < start.length; i++) {
    if (Math.abs(end[i] - start[i]) <= 5) {
      rotations += Math.abs(end[i] - start[i]);
    } else {
      rotations += 10 - Math.abs(end[i] - start[i]);
    }
  }
  return rotations;
}
