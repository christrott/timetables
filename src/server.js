import express from 'express';
import path from 'path';
import DataLoader from './DataLoader';
import Courses from './models/Courses.js';
import Students from './models/Students.js';

const app = express();
app.use(function (req, res, next) {
  express.static(path.join(__dirname, 'build', 'public'));
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
let studentData;

DataLoader.loadStudents().then((result) => {
  studentData = JSON.parse(result);

  app.get('/courses', (req, res) => {
    const courses = new Courses();
    res.send(courses.getCourses(studentData));
  });

  app.get('/students/:courseId', (req, res) => {
    const {courseId} = req.params;
    const students = new Students();
    res.send(students.getStudentsInCourse(courseId, studentData));
  });

  app.use(function(req, res, next) {
    res.status(404).send('Sorry, resource could not be found');
  });

  app.listen(process.env.PORT || 3001);
});
