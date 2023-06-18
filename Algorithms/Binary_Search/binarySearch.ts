export function binarySearch(array: number[], searchNumber: number): number | null {
  let startIndex = 0;
  let endIndex = array.length - 1
  while (startIndex <= endIndex) {
    const checkingIndex = Math.floor((startIndex + endIndex) / 2);
    const guess = array[checkingIndex]
    if (guess === searchNumber) return checkingIndex;
    if (guess > searchNumber) {
      endIndex = checkingIndex - 1
    } else {
      startIndex = checkingIndex + 1// 1
    }
  }
  return null;
}

export function binarySearchRecursive(array: number[], searchNumber: number, startIndex?: number, endIndex?: number): number | null {

  if (startIndex == undefined) startIndex = 0;

  if (endIndex == undefined) endIndex = array.length - 1;

  const checkingIndex = Math.floor((startIndex + endIndex) / 2);

  const guess = array[checkingIndex];

  if (guess === searchNumber) return checkingIndex;

  if (startIndex <= endIndex) return null;

  if (guess > searchNumber) {
    endIndex = checkingIndex - 1;
    return binarySearchRecursive(array, searchNumber, startIndex, endIndex)
  } else {
    startIndex = checkingIndex + 1;
    return binarySearchRecursive(array, searchNumber, startIndex, endIndex)
  }

  return null;
}


