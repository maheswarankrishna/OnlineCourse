import React from "react";
import { Container, Row } from "react-bootstrap";

function CourseGrid({children}) {
  return (
    <>
      <Container style={{marginTop:10}}>
        <Row>
            {children}
        </Row>
      </Container>
    </>
  );
}

export default CourseGrid;
