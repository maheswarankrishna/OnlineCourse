import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import Screen from "../../components/Screen";
import VideoCard from "../../components/video/VideoCard";
import QuizCard from "../../components/quiz/QuizCard";

import { GetSingleCourse } from "../../api/courses";
import { GetSingleCourseType } from "../../api/courseType";


class MyCourseScreen extends Component {
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
    const { match: { params } } = this.props;
    this.setState({ ...this.state.id, id: params.id });

    const res = GetSingleCourse(params.id);
    res.then(result => {
      this.setState({ ...this.state, name: result.courseName, description: result.description, quizes: result.quiz, videos: result.videos });
      const courseTypeResponse = GetSingleCourseType(result.courseTypeId);
      courseTypeResponse.then(result => {
        this.setState({ ...this.state.courseType, courseType: result.name })
      })
    });

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
              {console.log(this.state.videos)}
              {Array.isArray(this.state.videos)&&this.state.videos.map(({ id, fileName, videoDescription, filePath }) => (
                <VideoCard
                  key={id}
                  name={fileName}
                  description={videoDescription}
                  videoURL={filePath}
                />
              ))}
            </div>
          </Col>

          {/* Course Quizes */}
          <Col sm={4}>
            <div style={{ width: "100%", padding: 10 }}>
              <h2>Quizes</h2>
              <hr />
              {Array.isArray(this.state.quizes) && this.state.quizes.map(({ id, quizName, quizDescription }) => (
                <QuizCard key={id} id={id} name={quizName} description={quizDescription} />
              ))}
            </div>
          </Col>
        </Row>
      </Screen>
    );
  }
}

export default MyCourseScreen;
