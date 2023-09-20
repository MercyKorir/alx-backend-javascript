const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const urlPath = req.url;

  if (urlPath === '/') {
    res.end('Hello Holberton School!');
  } else if (urlPath === '/students') {
    try {
      const data = await readFileAsync(process.argv[2], 'utf-8');
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
      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const studentsList = studentsByField[field].join(', ');
          message += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsList}\n`;
        }
      }
      res.end(message);
    } catch (err) {
      res.end('Error: Cannot load the database');
    }
  } else {
    res.end('Not Found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
