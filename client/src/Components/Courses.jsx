import React from 'react';
import Loading from './Loading.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import Students from './Students.jsx';
import './styles/Courses.css';

const COURSES_URL = 'http://localhost:3001/courses';

export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      selectedCourseId: null,
      isLoading: true,
      errorMessage: null
    };
    this.changeSelectedCourse = this.changeSelectedCourse.bind(this);
  }

  componentDidMount() {
    fetch(COURSES_URL)
      .then(response => response.json())
      .then(courses => {
        this.setState({ courses, isLoading: false });
      })
      .catch((err) => {
        this.setState({ ...this.state, error: err.message })
      });
  }

  changeSelectedCourse(event) {
    const selectedCourseId = event.target.id;
    this.setState({ ...this.state, selectedCourseId });
  }

  render() {
    const { courses, selectedCourseId, errorMessage } = this.state;
    if (errorMessage) {
      return <ErrorMessage />;
    } else if (!courses) {
      return <Loading />;
    }
    return (
      <div id="courses-menu">
        <ul id="courses-list">
          <li><h1>Courses</h1></li>
          {courses.map(course => {
            const { subject_code, subject_desc } = course;
            const courseClass = (subject_code === selectedCourseId) ? 'course-item-selected' : 'course-item';
            return (<li className={courseClass}>
              <p onClick={this.changeSelectedCourse} id={subject_code}>{subject_desc}</p>
            </li>)
          })}
        </ul>
        <Students courseId={this.state.selectedCourseId} />
      </div>
    );
  }
}
