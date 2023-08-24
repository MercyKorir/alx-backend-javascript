interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mercy',
  lastName: 'Korir',
  age: 22,
  location: 'Nairobi',
};
const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nigeria',
};
export const studentsList: Array<Student> = [student1, student2];

import './table';
