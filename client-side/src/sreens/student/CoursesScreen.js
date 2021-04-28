import React, { Component } from "react";

import {GetAllCourses} from '../../api/courses';

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
    console.log(res);
    const courseArray = [
      {
        id: 1,
        title: "Basics",
        subtitle: "Steps to Basics",
        description: "A step by step process to do basics...",
      },
      {
        id: 2,
        title: "Intermediate",
        subtitle: "Steps to Intermediate",
        description: "A step by step process to do intermediate...",
      },
      {
        id: 3,
        title: "Pro",
        subtitle: "Steps to Pro",
        description: "A step by step process to do Pro...",
      },
      {
        id: 4,
        title: "Pro I",
        subtitle: "Steps to Pro I",
        description: "A step by step process to do Pro I  ...",
      },
      {
        id: 5,
        title: "Pro II",
        subtitle: "Steps to Pro II",
        description: "A step by step process to do Pro II  ...",
      },
    ];
    this.setState({...this.state.courses, courses:courseArray})
  }
  
  componentDidUpdate() { }

  render() {
    return (
      <Screen title="Courses" subtitle="Select a course" >
        <CourseGrid>
          {this.state.courses && this.state.courses.map((course) => (
            <CourseCard
              key={course.index}
              title={course.title}
              subtitle={course.subtitle}
              description={course.description}
            />
          ))}
        </CourseGrid>
      </Screen>
    );
  }

}

export default CoursesScreen;
