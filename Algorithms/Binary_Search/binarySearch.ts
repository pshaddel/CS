export function binarySearch(array: number[], searchNumber: number) {
  let startIndex = 0;
  let endIndex = array.length
  while (startIndex <= endIndex) {
    const checkingIndex = Math.floor((startIndex + endIndex) / 2); // 1
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

