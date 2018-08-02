import _ from 'lodash';

export default class Courses {
  getCourses(studentData) {
    return _(studentData).map((student) => {
        return student.class_details;
      })
      .flatten()
      .uniqWith((arrVal, othVal) => {
        return (arrVal.subject_code === othVal.subject_code);
      })
      .map((course) => {
        const { subject_code, subject_desc } = course;
        return { subject_code, subject_desc };
      });
  }
}
