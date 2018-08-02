import React from 'react';
import Loading from './Loading.jsx';
import './styles/Students.css';

const STUDENTS_URL = 'http://localhost:3001/students/';

export default class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null
    };
  }

  fetchStudentData() {
    const {courseId} = this.props;
    if (courseId) {
      console.log('Fetch new students for ' + courseId);
      fetch(STUDENTS_URL + courseId)
        .then(response => response.json())
        .then(students => {
          this.setState({ students });
        })
    }
  }

  componentDidMount() {
    this.fetchStudentData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.courseId !== this.props.courseId) {
      this.fetchStudentData();
    }
  }

  render() {
    const { students, isLoading } = this.state;
    const { courseId } = this.props;
    if ((!students && courseId) || isLoading) {
      return (
        <ul id="students-list">
          <li><Loading /></li>
        </ul>
      );
    } else if (!courseId) {
      return (<ul id="students-list">
        <li>Please select a Course</li>
      </ul>);
    }
    return (
      <ul id="students-list">
        <li><h1>Students</h1></li>
      {
        students.map(student => {
          return (<li id={student} className="student-item">
            <p>{student}</p>
          </li>);
        })
      }
      </ul>
    );
  }
}
