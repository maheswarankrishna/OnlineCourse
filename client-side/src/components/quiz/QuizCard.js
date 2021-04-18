import React from "react";
import { Media } from "react-bootstrap";

import QuizIcon from "../../assets/quiz-icon.png";

function VideoCard({ name, description, attempted }) {
  return (
    <>
      <Media style={{border:'1px solid #D9DDDC', marginTop:5, padding:10}}>
        <img
          width={60}
          height={60}
          className="mr-3"
          src={QuizIcon}
          alt="Video placeholder"
        />
        <Media.Body style={{alignItems:'center', marginTop:'auto', marginBottom:'auto'}}>
          <h6>
            {name}
            {attempted && (
              <span style={{ color: "blue", marginLeft: 10 }}>attempted</span>
            )}
          </h6>
          <p>{description}</p>
        </Media.Body>
      </Media>
    </>
  );
}

export default VideoCard;
