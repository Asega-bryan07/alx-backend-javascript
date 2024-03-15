/**
 * Retrieves students in a given location
 * @param {{
 * id: Number,
 * firstName: String,
 * location: String
 * }[]}
 * students - student list
 * @param {String} city - The location
 * @returns
 */
export default function getStudentsByLocation(students, city) {
    if (students instanceof Array) {
        return students.filter((student) => student.loaction === city);
    }
    return [];
}