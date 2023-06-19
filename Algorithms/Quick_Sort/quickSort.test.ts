import { quickSort } from "./quickSort";

describe("Algorithms: Quick Sort", () => {
    it('Should correctly sort array in different senarios', () => {
        expect(quickSort([3, 8, 1])).toEqual([1, 3, 8]);
        expect(quickSort([4, 15, 22, 331, 12, 11, 4])).toEqual([4, 4, 11, 12, 15, 22, 331]);
        expect(quickSort([-5, 0, 3, 202])).toEqual([-5, 0, 3, 202]);
        expect(quickSort([8, 1, 3])).toEqual([1, 3, 8]);
        expect(quickSort([])).toEqual([]);
        expect(quickSort([1])).toEqual([1]);
    })
})