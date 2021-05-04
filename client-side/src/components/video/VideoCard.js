import React, { useState } from "react";
import { Media } from "react-bootstrap";

import VideoHolder from "../../assets/video-icon.png";
import VideoView from "./VideoView";


function VideoCard({ name, description, videoURL }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Media style={{ border: '1px solid #D9DDDC', marginTop: 5 }} onClick={() => setModal(true)}>
        <img
          width={80}
          height={80}
          className="mr-3"
          src={VideoHolder}
          alt="Video placeholder"
        />

        <Media.Body style={{ alignItems: 'center', marginTop: 'auto' }}>
          <h6>{name}</h6>
          <p>{description}</p>
        </Media.Body>
      </Media>

      <VideoView show={modal} hide={() => setModal(false)} name={name} video={videoURL} />
    </>
  );
}

export default VideoCard;
