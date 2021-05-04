import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import Screen from "../../components/Screen";
import VideoCard from "../../components/video/VideoCard";
import QuizCard from "../../components/quiz/QuizCard";

import { GetSingleCourse } from "../../api/courses";
import { GetSingleCourseType } from "../../api/courseType";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      description: "",
      courseType: "",


      videos: [],
      quizes: [],
    };
  }

  componentDidMount() {
    // get course by Id
    const { match: { params } } = this.props;
    this.setState({...this.state.id, id:params.id});

    const res = GetSingleCourse(params.id);
    res.then(result => {
      this.setState({ ...this.state, name: result.courseName, description: result.description });
      const courseTypeResponse = GetSingleCourseType(result.courseTypeId);
      courseTypeResponse.then(result => {
        this.setState({ ...this.state.courseType, courseType: result.name })
      })
    });


    // get and save videos in state
    const videos = [
      { id: 1, name: "Introduction", description: "First steps", seen: true },
      { id: 2, name: "Chapter 1", description: "Second steps", seen: true },
      { id: 3, name: "Chapter 2", description: "Third steps", seen: true },
      { id: 4, name: "Chapter 3", description: "Fourth steps", seen: false },
      { id: 5, name: "Chapter 4", description: "Fifth steps", seen: false },
      { id: 6, name: "Chapter 5", description: "Sixth steps", seen: false },
      { id: 7, name: "Chapter 6", description: "Seventh steps", seen: false },
    ];
    this.setState({ ...this.state.videos, videos: videos });

    // get and save quizes in state
    const quizes = [
      { id: 1, name: "Introduction", description: "Quiz 1", attempted: true },
      { id: 2, name: "Chapter 1", description: "Quiz 2", attempted: true },
      { id: 3, name: "Chapter 2", description: "Quiz 3", attempted: true },
      { id: 4, name: "Chapter 3", description: "Quiz 4", attempted: false },
    ];
    this.setState({ ...this.state.quizes, quizes: quizes });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <Screen title={this.state.name} subtitle={this.state.description}>
        {/* TODO: Category must be included */}
        <Row style={{ marginTop: 20 }}>
          {/* Course Videos */}
          <Col sm={8}>
            <div style={{ width: "100%", padding: 10 }}>
              <h2>Videos</h2>
              <hr />
              {Array.isArray(this.state.videos) && this.state.videos.map(({ id, name, description, seen , videoURL }) => (
                <VideoCard
                  key={id}
                  name={name}
                  description={description}
                  seen={seen}
                  // videoURL={videoURL}
                />
              ))}
            </div>
          </Col>

          {/* Course Quizes */}
          <Col sm={4}>
            <div style={{ width: "100%", padding: 10 }}>
              <h2>Quizes</h2>
              <hr />
              {this.state.quizes.map(({ id, name, description, attempted }) => (
                <QuizCard
                  key={id}
                  name={name}
                  description={description}
                  attempted={attempted}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Screen>
    );
  }
}

export default Course;
