import React from "react";
import { Container, Row } from "react-bootstrap";

function CourseGrid({children}) {
  return (
    <>
      <Container style={{border:'1px solid red', marginTop:10}}>
        <Row>
            {children}
        </Row>
      </Container>
    </>
  );
}

export default CourseGrid;
