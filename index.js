class User {
  constructor(name,userId) {
    if (new.target === User) {
      throw new Error("Don't instantiate this class❌") //defining an abstract class
    }
    this._name = name // showing encapsulation by using underscores making it private property
    this._userId = userId // make it a private property
  }
 //getter for name
  getName (){
    return this._name
  }
 // getter for uderId
 getuserId (){
  return this._userId
 }

  }

class Student extends User {
  constructor (name,userId){
    super(name,userId);
    this._grades = [];
  }

  addGrade(grade) {
    this._grades.push(grade);
  }

  calculateAverage() {
    if (this._grades.length === 0) 
      return 0;
    const total = this._grades.reduce((sum, grade) => sum + grade, 0);
    return (total / this._grades.length).toFixed(2);
  }
 
  viewdetails() {
    return `
    name: ${this.getName()}
    userId: ${this.getuserId()}
    grades:${this._grades.join(",") || "no grades for this student"}
    Ave grade: ${this.calculateAverage()}`;
  }
};


class Admin {
  students = [];

  addstudent(name,userId){
    const existingStudent = this.students.find(student => student.getuserId() === userId);
    if (existingStudent) {
      console.log(`Student with ID ${id} already exists.`);
      return;
    }
    const newStudent = new Student(name,userId);
    this.students.push(newStudent);
    console.log(`student: ${name} (UserId: ${userId}) has been added succesfully`)
    
  }

  viewStudentbyId(userId){
    const student = this.students.find(student => student.getuserId() === userId);
    if(!student){
      console.log(`student with ID:${userId} does not exist`)
      return;
    }
    console.log(student.viewdetails())
  }

  addGradeofStudent(name,userId){
    const student = this.students.find(student => student.getuserId()=== userId);
    if(!student){
      console.log(`student with ID: ${userId} not found`)
      return;
    }
    student.addGrade(grade)
  }
}



/*const student = new Student('anugo','#19');
student.addGrade(23)
student.addGrade(20)

console.log(student.viewdetails())*/
