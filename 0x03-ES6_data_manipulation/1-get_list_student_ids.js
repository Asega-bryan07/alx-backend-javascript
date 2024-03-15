/**
 * Retrieves ids from a list students
 * @param {{id: Number, 
 * firstName: String,
 * location: String,
 * }[]}
 * students - list of students
 */
export default function getListStudentIds(students) {
    if (students instanceof Array) {
        return students.map((student) => student.id);
    }
    return [];
}