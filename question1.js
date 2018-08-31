function getSequenceLength(elem) {
  let allElements = [elem];
  let inSequence = false;
  while (!inSequence) {
    let split = allElements[allElements.length - 1].toString().split('');
    let nextElem = 0;
    split.forEach(digit => {
      nextElem += Number(digit) * Number(digit);
    });
    if (allElements.indexOf(Number(nextElem)) === -1) {
      allElements.push(Number(nextElem));
    } else {
      allElements.push(Number(nextElem));
      inSequence = true;
    }
  }
}
