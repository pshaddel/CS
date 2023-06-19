export function quickSort(array: number[]): number[] {
    if (array.length <= 1) return array;

    if (array.length == 2) {
        if (array[0] > array[1]) {
            // sort it
            [array[1], array[0]] = [array[0], array[1]];
        }
        // it is already sorted
        return array;
    }

    const midIndex = Math.floor(array.length / 2);
    const mid = array[midIndex]
    const left: number[] = [];
    const right: number[] = [];

    array.forEach((element, index) => {
        if (index === midIndex) return
        if (element > mid) {
            right.push(element)
        } else {
            left.push(element)
        }
    });

    return [...quickSort(left), mid, ...quickSort(right)]
}