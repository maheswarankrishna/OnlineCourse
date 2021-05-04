import React from "react";
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player'

function VideoView({ name, video, show, hide }) {
  return (
    <>
      <Modal show={show} onHide={hide} centered size='xl'>
        
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ReactPlayer url={video} width={'100%'} />
        </Modal.Body>

        <Modal.Footer>
          <p>*** Double click to view full screen</p>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default VideoView;
