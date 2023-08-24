import { studentsList } from './main';

const container = document.querySelector('#container');

// Create the table element
const table = document.createElement('table');

// Create a header row
const headerRow = document.createElement('tr');
const headerName = document.createElement('th');
headerName.textContent = 'Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Iterate over the studentsList array and create a new row for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the container element
container.appendChild(table);
