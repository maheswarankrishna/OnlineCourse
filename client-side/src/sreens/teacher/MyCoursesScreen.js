import React, { Component } from "react";
import Screen from "../../components/Screen";
import CourseGrid from "../../components/course/CourseGrid";
import CourseCard from "../../components/course/CourseCard";

import { getUserId } from "../../api/users";
import { GetCoursesByTeacherId } from "../../api/courses";

export default class MyCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseArray: [],
    };
  }

  componentDidMount() {
    // get Id of auth user
    const {id} = getUserId(); 
    
    // get courses by auth user (teacher)
    const res = GetCoursesByTeacherId(id);
    res.then(result=> this.setState({...this.state.courseArray, courseArray:result}))
  }

  render() {
    return (
      <Screen title="My Courses" subtitle="All your courses are available here">
        <CourseGrid>
          {Array.isArray(this.state.courseArray) && this.state.courseArray.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.courseName}
              subtitle={`CourseId: ${course.id}`}
              description={course.description}
            />
          ))}
        </CourseGrid>
      </Screen>
    );
  }
}
