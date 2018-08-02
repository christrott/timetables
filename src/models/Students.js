import _ from 'lodash';

export default class Courses {
  getStudentsInCourse(courseId, studentData) {
    const students = _(studentData).filter((student) => {
        return _.find(student.class_details, (course) => {
          return course.subject_code === courseId;
        });
      });
    return _(students).map((student) => {
        return student.student_id;
      });
  }
}
