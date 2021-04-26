import React, { Component } from "react";
import Screen from "../../components/Screen";
import CourseGrid from "../../components/course/CourseGrid";
import CourseCard from "../../components/course/CourseCard";

export default class MyCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseArray: [],
    };
  }

  componentDidMount() {
    // get courses for current logged in
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
    this.setState({ ...this.state.courses, courseArray: courseArray });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <Screen title="Courses" subtitle="Select a course">
        <CourseGrid>
          {this.state.courseArray.map((course) => (
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
