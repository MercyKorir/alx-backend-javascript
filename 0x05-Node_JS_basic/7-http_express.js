const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbPath = process.argv[2];
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
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
    let message = 'This is the list of our students\n';
    message += `Number of students: ${totalStudents}\n`;
    let fieldCount = 0;
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const studentsList = studentsByField[field].join(', ');
        const fieldMsg = `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsList}`;
        message += fieldMsg;
        fieldCount += 1;
        if (fieldCount < Object.keys(studentsByField).length) {
          message += '\n';
        }
      }
    }
    res.end(message);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
