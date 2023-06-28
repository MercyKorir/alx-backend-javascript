export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let departmentIdx = 0;
  let employeeIdx = 0;

  return {
    next() {
      if (departmentIdx >= departments.length) {
        return { value: undefined, done: true };
      }
      const department = departments[departmentIdx];
      const employee = allEmployees[department][employeeIdx];
      employeeIdx += 1;
      if (employeeIdx >= allEmployees[department].length) {
        departmentIdx += 1;
        employeeIdx = 0;
      }
      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
