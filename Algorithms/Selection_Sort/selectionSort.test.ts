import { selectionSort } from "./selectionSort";

describe("Algorithms: Selection Sort", () => {
    it('Should correctly sort array in different senarios', () => {
        expect(selectionSort([3, 8, 1])).toEqual([8, 3,1]);
        expect(selectionSort([4, 15, 22, 331, 12, 11, 4])).toEqual([331, 22, 15, 12,11,4,4]);
        expect(selectionSort([-5, 0, 3, 202])).toEqual([202, 3, 0, -5]);
        expect(selectionSort([8, 1, 3])).toEqual([8, 3, 1]);
    })
})