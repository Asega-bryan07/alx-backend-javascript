/**
 * Retrieves a list of students
 * @returns {{id: Number, firstName: String, location: String}}
 */
export default function getListStudents() {
    return [
        {id: 1, firstName: 'Guillaume', location: 'San Francisco'},
        {id: 1, firstName: 'James', location: 'Coloumbia'},
        {id: 1, firstName: 'Serena', location: 'San Francisco'}
    ];
}