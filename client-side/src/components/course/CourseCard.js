import React from "react";
import { Card, Col } from "react-bootstrap";
import CourseIcon from '../../assets/course-icon.png'

export default function CourseCard({ title, subtitle, description }) {
  return (
      <>
<Col style={{marginTop:5, marginBottom:5}}>
    <Card style={{ width: "14rem", height:'100%', overflow:'hidden', borderRadius:10 }}>
      <Card.Img variant="top" src={CourseIcon} width='100%'/>
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
