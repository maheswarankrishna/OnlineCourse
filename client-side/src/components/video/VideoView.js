import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player'

// import VideoImage from '../../assets/video-icon.png';

function VideoView({ name, video, show, hide }) {


  return (
    <>
      <Modal show={show} onHide={hide} centered size='xl'>
        {/* <Modal.Dialog> */}
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <img src={VideoImage} width={'100%'} height={'100%'} alt='Video Playing'/> */}
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={'100%'} />
        </Modal.Body>

        <Modal.Footer>
          <p>*** Double click to view full screen</p>
        </Modal.Footer>
        {/* </Modal.Dialog> */}
      </Modal>
    </>
  );
}

export default VideoView;
