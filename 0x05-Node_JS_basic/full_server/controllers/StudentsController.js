import process from 'process';
import readDatabase from '../utils';

const dbPath = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(dbPath)
      .then((data) => {
        const { studentsField } = data;

        const output = [];

        for (const field in studentsField) {
          if (Object.prototype.hasOwnProperty.call(studentsField, field)) {
            const studentsList = studentsField[field].join(', ');
            output.push(
              `Number of students in ${field}: ${studentsField[field].length}. List: ${studentsList}`,
            );
          }
        }

        const resText = `This is the list of our students\n${output.join(
          '\n',
        )}`;
        res.status(200).send(resText);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(dbPath)
      .then((data) => {
        const { studentsField } = data;

        const studentsInMajor = studentsField[major];

        const studentsList = studentsInMajor.join(', ');

        const resText = `List: ${studentsList}`;
        res.status(200).send(resText);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
