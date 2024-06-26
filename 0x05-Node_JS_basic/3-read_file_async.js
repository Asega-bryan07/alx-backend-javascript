const fs = require('fs');

/**
 * 
 * @param {String} dataPath 
 * @returns 
 * create a function countStudents in the file 3-read_file_async.js

Create a function named countStudents. It should accept a path in 
argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error with the 
text Cannot load the database
If the database is available, it should log the following message to 
the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with 
the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

const countStudents = (dataPath) => new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);
  
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
  
        const totalStudents = Object
          .values(studentGroups)
          .reduce((pre, cur) => (pre || []).length + cur.length);
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group.map((student) => student.firstname).join(', ');
          console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        }
        resolve(true);
      }
    });
  });
  
  module.exports = countStudents;