import React from "react";
import { Media } from "react-bootstrap";

import VideoHolder from "../../assets/video-icon.png";

function VideoCard({ name, description, seen }) {
  return (
    <>
      <Media style={{border:'1px solid #D9DDDC', marginTop:5}}>
        <img
          width={80}
          height={80}
          className="mr-3"
          src={VideoHolder}
          alt="Video placeholder"
        />
        <Media.Body style={{alignItems:'center', marginTop:'auto'}}>
          <h6>
            {name}
            {seen && (
              <span style={{ color: "blue", marginLeft: 10 }}>seen</span>
            )}
          </h6>
          <p>{description}</p>
        </Media.Body>
      </Media>
    </>
  );
}

export default VideoCard;
