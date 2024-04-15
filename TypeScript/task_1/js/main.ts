interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [newProp: string]: any;
}

interface Directors extends Teacher { // Extending the Teacher interface
  numberOfReports: number; // New property for the Directors interface
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function ( // Function that returns the full name of a teacher
  firstName: string,
  lastName: string
): string {
  return "${firstName[0]}. ${lastName}";
};

interface ClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements ClassInterface { // Implementing the ClassInterface
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) { // Constructor for the StudentClass class that takes a firstName and lastName
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string { // Method that returns a string
    return "Currently working";
  }

  displayName(): string { // Method that returns the firstName
    return this.firstName;
  }
}

const studentClass: StudentClass = new StudentClass("Hugo", "Casteras"); // Creating a new instance of the StudentClass class
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
