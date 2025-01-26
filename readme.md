# Student Management System(SMS)

## **Overview**
The Student Management System is a simple and efficient JavaScript-based application designed to manage students, track their grades, and calculate their average grades. This project demonstrates core Object-Oriented Programming (OOP) principles, including encapsulation, inheritance, abstraction, and polymorphism, while providing a user-friendly interface for managing student data.

## **Features** 
- Add Students: Add new students with a unique `name` and `userId`.
- Grade Management: Assign grades to students.
* View Student Details: Retrieve and display a student's name, ID, grades, and average grade.
* Duplicate Prevention: Ensures no duplicate userId is allowed in the system.
* Encapsulation: Private properties (`#name` and `#userId`) ensure sensitive student data is only accessible through getter methods.

## **How It Works**
### Core Classes ###
`User`

- Abstract base class.
- Encapsulates private properties `#name` and `#userId`.
Provides getter methods (`getName()` and `getuserId()`) for accessing private properties.

`Student`:

- Inherits from User.
- Includes public methods to add grades (`addGrade()`), calculate the average grade (`calculateAverage()`), and view detailed information (`viewdetails()`).


`StudentManagementSystem`:

- Manages the list of students.
- Provides methods to add students, view student details by `userId`, and add grades for specific students


## Usage
### Adding a Student
```
admin.addstudent("arinze", "001");
```
- Adds a new student with the name "arinze" and a unique user ID of 001.

### Adding Grades
```
admin.addGradeofStudent(80, "001"); 
admin.addGradeofStudent(88, "001"); 
admin.addGradeofStudent(70, "001");
```
- Adds grades `80` , `88` , and `70` to the student with ID: `001`
### Viewing Student Details
```
console.log(admin.viewStudentbyId("001"));
```
- Displays the student's name, ID, grades, and average grade.

### Example Output
```
student: arinze (UserId: 001) has been added successfully😁✨

    name: arinze
    userId: 001
    grades: 80,88,70
    Ave grade: 79.33
```
## OOP concepts defined in the code
- **Encapsulation:**
Ensures sensitive properties (e.g., `name` and `userId`) are private and accessible only through getters.
- **Abstraction:**
Blocks direct instantiation of the `User` class to maintain logical consistency.
- **Inheritance:**
Student inherits shared properties and methods from `User`, promoting code reuse.
- **Polymorphism:**
Custom behavior for `viewdetails()` in the `Student` class adapts the method to display student-specific details.


### To Run The Code

- Run `node index.js` 

- **screenshot of output** was uploaded as a file in the repository
![OUTPUT](https://github.com/Anugo1/student-management-system/blob/main/index.js%20-%20student-management-system%20-%20Visual%20Studio%20Code%201_26_2025%205_31_11%20PM.png "ScreenShot")