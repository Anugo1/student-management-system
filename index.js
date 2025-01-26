class User {
  // Private properties using #
  #name;
  #userId;

  constructor(name, userId) {
    // Prevent direct instantiation of the User class (abstract class behavior)
    if (new.target === User) {
      throw new Error("Don't instantiate this class❌");
    }

    // Assign private properties
    this.#name = name; // # makes it a private property
    this.#userId = userId;
  }

  // Getter method to access the private property #name
  getName() {
    return this.#name;
  }

  // Getter method to access the private property #userId
  getuserId() {
    return this.#userId;
  }
}

class Student extends User {
  
  constructor(name, userId) {
    super(name, userId); // Call the parent class constructor (User)
    this._grades = []; // Public property to store student grades
  }

  
  addGrade(grade) {
    this._grades.push(grade);
  }

 
  calculateAverage() {
    if (this._grades.length === 0) return 0; // Return 0 if no grades are present
    const total = this._grades.reduce((sum, grade) => sum + grade, 0); // Sum all grades using reduce
    return (total / this._grades.length).toFixed(2); // Return the average rounded to 2 decimal places
  }

  // Method to view the student's details
  viewdetails() {
    return `
    name: ${this.getName()} 
    userId: ${this.getuserId()} 
    grades: ${this._grades.join(",") || "no grades for this student 💔😢"} 
    Ave grade: ${this.calculateAverage()}`;
  }
}

class StudentManagementSystem {
  // private property array to store students
  #students = [];

  
  addstudent(name, userId) {
    // Check if a student with the same userId already exists
    const existingStudent = this.#students.find(
      (student) => student.getuserId() === userId
    );
    if (existingStudent) {
      console.log(`Student with ID:${userId} already exists😮❌.`);
      return; // Exit if student exists
    };

    // Create a new Student object and add it to the students array
    const newStudent = new Student(name, userId);
    this.#students.push(newStudent);
    console.log(`student: ${name} (UserId: ${userId}) has been added successfully😁✨`);
  }


  viewStudentbyId(userId) {
    // Find the student with the given userId
    const student = this.#students.find(
      (student) => student.getuserId() === userId
    );
    if (!student) {
      console.log(`student with ID:${userId} does not exist❌`);
      return; // Exit if student is not found
    }

    // Return the student's details
    return student.viewdetails();
  };

 
  addGradeofStudent(grade, userId) {
    // Find the student with the given userId
    const student = this.#students.find(
      (student) => student.getuserId() === userId
    );
    if (!student) {
      console.log(`student with ID:${userId} not found🤷‍♀️❌`);
      return; // Exit if student is not found
    };

    // Add the grade to the student's grades array
    student.addGrade(grade);
  }
};

// Create an instance of the StudentManagementSystem
const admin = new StudentManagementSystem();

// Add new students
admin.addstudent("arinze", "001"); // Adds successfully
// admin.addstudent("anugo", "001"); // Fails, as ID already exists
// admin.addstudent("cj", "002"); // Adds successfully

// Add grades for students
admin.addGradeofStudent(80, "001"); 
admin.addGradeofStudent(88, "001"); 
admin.addGradeofStudent(70, "001"); 
//admin.addGradeofStudent(80, "002"); 
// admin.addGradeofStudent(70, "002"); 

// View details of students by ID
console.log(admin.viewStudentbyId("001")); // Displays details for student with ID 001
//console.log(admin.viewStudentbyId("002")); // Displays details for student with ID 002
