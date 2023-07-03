export default function updateStudentGradeByCity(students, city, newGrades) {
  const arrByCity = students.filter((obj) => obj.location === city);
  return arrByCity.map((objByCity) => {
    const grade = newGrades.find(
      (gradeObj) => gradeObj.studentId === objByCity.id,
    );
    return {
      ...objByCity,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}
