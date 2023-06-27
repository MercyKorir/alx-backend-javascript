export default function createEmployeesObject(departmentName, employees) {
  const myObject = {
    [`${departmentName}`]: [...employees],
  };
  return myObject;
}
