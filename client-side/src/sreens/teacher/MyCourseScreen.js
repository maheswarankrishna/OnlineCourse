import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import Screen from "../../components/Screen";
import VideoCard from "../../components/video/VideoCard";
import QuizCard from "../../components/quiz/QuizCard";

import { getUserId } from "../../api/users";
import { GetSingleCourse } from "../../api/courses";

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
    // const res = GetSingleCourse(id);

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
              {this.state.videos.map(({ id, name, description, seen }) => (
                <VideoCard
                  key={id}
                  name={name}
                  description={description}
                  seen={seen}
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

export default MyCourseScreen;
