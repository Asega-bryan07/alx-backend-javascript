/**
 * Retrieves students in a given location
 * @param {{
* id: Number,
* firstName: String,
* location: String
* }[]}
* students - student list
* @param {}
* city - The city of students
* @param {{
* studentId: Number,
* grade: Number,
* }[]} newGrades - The new grades to be given to a student
* @return {{id: Number, firstName: String, location: String} []}
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
    const defaultGrade = {grade: 'N/A'};

    if (students instanceof Array) {
        return students
        .filter((student) => student.location === city)
        .map((student) => ({
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: (newGrades
                .filter((grade) => grade.studentId === student.id)
                .pop() || defaultGrade).grade,  
        }));        
    }
    return [];
}