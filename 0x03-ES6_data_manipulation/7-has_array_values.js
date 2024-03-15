/**
 * Checks if a set of each element in an array
 * @param {Set} set - collection of unique items
 * @param {*} array - array of items
 * @returns {Bollean}
 */
export default function hasValuesFromArray(set, array) {
    return array.every((value) => set.has(value));
}