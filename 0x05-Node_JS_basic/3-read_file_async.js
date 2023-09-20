const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const studentsByField = {};
        let totalStudents = 0;
        for (const line of lines) {
          const [firstName, , , field] = line.split(',');

          if (field !== 'field') {
            totalStudents += 1;
            if (studentsByField[field]) {
              studentsByField[field].push(firstName);
            } else {
              studentsByField[field] = [firstName];
            }
          }
        }
        console.log(`Number of students: ${totalStudents}`);
        for (const field in studentsByField) {
          if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
            const studentsList = studentsByField[field].join(', ');
            console.log(
              `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsList}`,
            );
          }
        }
        resolve();
      }
    });
  });
};

module.exports = countStudents;
