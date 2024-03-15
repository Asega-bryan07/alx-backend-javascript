/**
 * joins a set of strings with a dash after string of
 * leading sub-string
 * @param {Set<String>} set - a collection of strings
 * @param {String} StartString - string to strip from
 * the begining of each item in the set
 * @returns {String}
 */
export default function cleanSet(set, StartString) {
    const parts = [];
    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
        return '';
    }
    for (const value of set.values()) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            const valueSubStr = value.substring(startString.length);
            
            if (valueSubStr && valueSubStr !== value) {
                parts.push(valueSubStr);
            }
        }
    }
    return parts.join('-');
}