
class User {
  constructor(id, name, email) {
    this._id = id;
    this._name = name;
    this._email = email;
  }

  login() {
    console.log(`${this._name} logged in.`);
  }

  logout() {
    console.log(`${this._name} logged out.`);
  }

  viewCourses() {
    return "Generic course list";
  }


  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}
class Student extends User {
  constructor(id, name, email) {
    super(id, name, email);
    this.enrolledCourses = [];
  }

  viewCourses() {
    return this.enrolledCourses;
  }

  enroll(course) {
    course.enrollStudent(this);
    this.enrolledCourses.push(course);
  }

  submitAssignment(assignment, content) {
    assignment.submit(this, content);
  }

 
}

class Instructor extends User {
  constructor(id, name, email) {
    super(id, name, email);
    this.coursesTaught = [];
  }

  viewCourses() {
    return this.coursesTaught;
  }

  createCourse(title) {
    const course = new Course(Date.now(), title, this);
    this.coursesTaught.push(course);
    return course;
  }

  gradeAssignment(assignment, student, score) {
    const grade = new Grade(student, assignment, score);
    assignment.setGrade(student, grade);
  }
}

class Course {
  constructor(id, title, instructor) {
    this.id = id;
    this.title = title;
    this.instructor = instructor;
    this.students = [];
    this.assignments = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  addAssignment(assignment) {
    this.assignments.push(assignment);
  }
}

class Assignment {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.submissions = new Map();
    this.grades = new Map();
  }

  submit(student, content) {
    this.submissions.set(student._id, content);
  }

  getSubmission(student) {
    return this.submissions.get(student._id);
  }

  setGrade(student, grade) {
    this.grades.set(student._id, grade);
  }

  getGrade(student) {
    return this.grades.get(student._id);
  }
}

class Grade {
  constructor(student, assignment, score) {
    this.student = student;
    this.assignment = assignment;
    this._score = score;
  }

  getScore() {
    return this._score;
  }

  setScore(score) {
    this._score = score;
  }
}
