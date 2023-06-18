import { binarySearch } from "./binarySearch";

describe("Algorithms: Binary Search", () => {
    it('Should return null when the element is not there(Odd mumber of elements)', () => {
        const array = [1, 4, 8];
        expect(binarySearch(array, 5)).toBe(null)
    })

    it('Should return null when the element is not there(Even mumber of elements)', () => {
        const array = [1, 4, 8, 21];
        expect(binarySearch(array, 5)).toBe(null)
    })

    it('Should return index when the element is there(Odd number of elements)', () => {
        const array = [1, 4, 8, 18];
        expect(binarySearch(array, 4)).toBe(1)
    })

    it('Should return index when the element is the middle one', () => {
        const array = [1, 4, 8, 18, 31];
        expect(binarySearch(array, 8)).toBe(2)
    })
})