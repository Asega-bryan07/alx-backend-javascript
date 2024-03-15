/**
 * Retrieves students in a given location
 * @param {{
* id: Number,
* firstName: String,
* location: String
* }[]}
* students - student list
* @param {Number}
*/
export default function getListStudentIdsSum(students) {
    if (students instanceof Array) {
        return students.reduce(
            (prevStundent, curStudent) => prevStundent.id || prevStudent + curStudent.id,
            0,
        );
    }
    return 0;
}