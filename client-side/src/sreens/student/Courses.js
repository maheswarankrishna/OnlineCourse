import React from "react";

import Screen from "../../components/Screen";
import CourseGrid from "../../components/course/CourseGrid";
import CourseCard from "../../components/course/CourseCard";

function Courses(props) {
  // const [courses, setCourses] = useState();

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
  ];

  return (
    <Screen title="Courses" subtitle="Select a course">
      <CourseGrid>
        {courseArray.map((course) => (
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

export default Courses;
