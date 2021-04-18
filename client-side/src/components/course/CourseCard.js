import React from "react";
import { Card, Col } from "react-bootstrap";

export default function CourseCard({ title, subtitle, description }) {
  return (
      <>
<Col style={{marginTop:5}}>
    <Card style={{ width: "18rem", height:'100%' }}>
      <Card.Img variant="top" src={require('../../logo.svg')} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </Col>
    </>
  );
}
