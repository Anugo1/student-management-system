class User {
  #name;
  #userId
  constructor(name,userId) {
    if (new.target === User) {
      throw new Error("Don't instantiate this class❌") //defining an abstract class
    }
    this.#name = name // showing encapsulation by using underscores making it private property
    this.#userId = userId // make it a private property
  }
 //getter for name
  getName (){
    return this.#name
  }
 // getter for uderId
 getuserId (){
  return this.#userId
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
      console.log(`Student with ID ${userId} already exists.`);
      return;
    }
    const newStudent = new Student(name,userId);
    this.students.push(newStudent);
    console.log(`student: ${name} (UserId: ${userId}) has been added succesfully`)
    
  }

  viewStudentbyId(userId){
    const student = this.students.find(student => student.getuserId() === userId);
    if(!student){
      return `student with ID:${userId} does not exist`;
    }
    return student.viewdetails()
  }

  addGradeofStudent(grade,userId){
    const student = this.students.find(student => student.getuserId()=== userId);
    if(!student){
      console.log(`student with ID: ${userId} not found`)
      return;
    }
    student.addGrade(grade)
  }
}
 
const admin = new Admin()
admin.addstudent("anugo","001")

console.log(admin.viewStudentbyId("001"))

/*const student = new Student('anugo','#19');
student.addGrade(23)
student.addGrade(20)

console.log(student.viewdetails())*/
