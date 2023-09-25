import fs from 'fs/promises';

export default async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentsField = {};
    let totalStudents = 0;

    for (const line of lines) {
      const [firstName, , , field] = line.split(',');
      if (field !== 'field') {
        totalStudents += 1;
        if (studentsField[field]) {
          studentsField[field].push(firstName);
        } else {
          studentsField[field] = [firstName];
        }
      }
    }
    const result = {
      totalStudents,
      studentsField,
    };
    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
