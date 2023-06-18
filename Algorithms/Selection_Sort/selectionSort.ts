export function selectionSort(array: number[]): number[] {
    const newArray = [...array];
    for (let i = 0; i < array.length; i++) {
        let max = newArray[i];
        let maxIndex = i;
        for (let j = i; j < array.length; j++) {
            if (newArray[j] > max) {
                max = newArray[j];
                maxIndex = j;
            }
        }
        // replace max index with the i
        [newArray[i], newArray[maxIndex]] = [newArray[maxIndex], newArray[i]]
    }
    return newArray;
}