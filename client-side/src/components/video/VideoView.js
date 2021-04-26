import React from "react";
import {Button, Modal} from 'react-bootstrap';
import VideoImage from '../../assets/video-icon.png';

function VideoView({ name, videoURL, close, show, hide }) {
  return (
    <>
      <Modal show={show} onHide={hide}>
        {/* <Modal.Dialog> */}
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={VideoImage} width={'100%'} height={'100%'} alt='Video Playing'/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>Close</Button>
          </Modal.Footer>
        {/* </Modal.Dialog> */}
      </Modal>
    </>
  );
}

export default VideoView;
