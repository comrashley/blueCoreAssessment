function unlockChars(start, end, charSet) {
  let rotations = 0;
  for (let i = 0; i < start.length; i++) {
    let startIndex = charSet.indexOf(start[i]);
    let endIndex = charSet.indexOf(end[i]);
    if (Math.abs(endIndex - startIndex) <= charSet.length / 2) {
      rotations += Math.abs(endIndex - startIndex);
    } else {
      rotations += charSet.length - Math.abs(endIndex - startIndex);
    }
  }
  return rotations;
}
