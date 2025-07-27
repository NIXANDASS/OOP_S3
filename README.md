#  Online Course Management System 
This project represents a basic Online Course Management System implemented using fundamental Object-Oriented Programming (OOP) principles in JavaScript. It emulates real-world educational workflows involving students, instructors, courses, assignments, and grading.
## CLASS DIAGRAM
![alt text](DIAGRAM.png)
## OOP DESIGN:
#### Abstraction
Core operations like enroll, submitAssignment, and assignGrade are exposed clearly without showing internal mechanics.

#### Encapsulation
Private variables like _score, _email use getter/setter methods to control access.

#### Inheritance
Student, Instructor, and Administrator inherit from User, reducing redundancy.

#### Polymorphism
Role-specific methods like createCourse() and submitAssignment() are defined only in their respective subclasses.

## SOLID Principles Used:
S: Each class (e.g., Assignment, Grade) has one responsibility.

O: User is open for extension (subclasses) but closed for modification.

L: Student, Instructor, and Administrator can substitute User without issues.

I: Students/Instructors only access functions they need; no large interfaces.

D: Interactions like grading or announcements rely on abstracted objects (Grade, Announcement) passed into methods.