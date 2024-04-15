interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Toulouse"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Paris"
};

const studentsList: Array<Student> = [student1, student2] // Array of students

const body: HTMLBodyElement = document.getElementsByTagName('body')[0] // Get the body element

const table: HTMLTableElement = document.createElement('table') // Create a table element
const thead: HTMLTableSectionElement = document.createElement('thead') // Create a thead element
const tbody: HTMLTableSectionElement = document.createElement('tbody') // Create a tbody element

const rowHead: HTMLTableRowElement = thead.insertRow(0) // Create a row in the thead element
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0) // Create a cell in the row of the thead element at index 0
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1) // Create a cell in the row of the thead element at index 1

cell1Head.innerHTML = 'firstName' // Set the innerHTML of the cell1Head to 'firstName'
cell2Head.innerHTML = 'location' // Set the innerHTML of the cell2Head to 'location'

table.append(thead) // Append thead to the table

studentsList.forEach((student) => { // Loop through the studentsList
  const row: HTMLTableRowElement = tbody.insertRow(0)
  const cell1: HTMLTableCellElement = row.insertCell(0)
  const cell2: HTMLTableCellElement = row.insertCell(1)

  cell1.innerHTML = student.firstName // Set the innerHTML of the cell1 to student.firstName
  cell2.innerHTML = student.location // Set the innerHTML of the cell2 to student.location
})

table.append(tbody) // Append tbody to the table
body.append(table) // Append table to the body
