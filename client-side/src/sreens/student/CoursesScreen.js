import React, { Component } from "react";

import { GetAllCourses } from '../../api/courses';

import Screen from "../../components/Screen";
import CourseGrid from "../../components/course/CourseGrid";
import CourseCard from "../../components/course/CourseCard";

class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    const res = GetAllCourses();
    res.then(result => { this.setState({ ...this.state.courses, courses: result }) })
  }

  componentDidUpdate() {}

  render() {
    return (
      <Screen title="Courses" subtitle="Select a course" >
        <CourseGrid>
          {this.state.courses && this.state.courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.courseName}
              subtitle={course.courseType}
              description={course.description}
            />
          ))}
        </CourseGrid>
      </Screen>
    );
  }

}

export default CoursesScreen;
