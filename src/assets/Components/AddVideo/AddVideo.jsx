import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideo } from '../../../Services/allApi';

function AddVideo({ setData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [video, setVideo] = useState({
    videoID: '', caption: '', image: '', videoURL: ''
  })

  const handleSubmit = async () => {
    const { videoID, caption, image, videoURL } = video

    if (!videoID || !caption || !image || !videoURL) {
      toast.info("Enter Valid Values in all input fields")
    } else {

      //changing watch url to embeded url

      const code = videoURL.split('v=')[1]
      const embededURL = `https://www.youtube.com/embed/${code}?si=o51yVOKAbtGqXlaV&autoplay=1`;
      video.videoURL = embededURL

      // console.log(video)
      const res = await addVideo(video)
      // console.log(res)
      if (res.status === 201) {
        setData(res)
        handleClose()
        setVideo({ videoID: '', caption: '', image: '', videoURL: '' })
        toast.success('Video Uploaded successfully')
      } else {
        console.log(res)
        toast.error('Video Upload Failed')
      }
    }

  }

  return (
    <>
      <button className='btn border border-white ' onClick={handleShow}>
        ➕ Add Video
      </button>



      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingId" label="Video ID" className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => { setVideo({ ...video, videoID: e.target.value }) }}
              placeholder="ID" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCaption" label="Video Caption" className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => { setVideo({ ...video, caption: e.target.value }) }}
              placeholder="caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideoImageURL" label="Video Image Url" className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => { setVideo({ ...video, image: e.target.value }) }}
              placeholder="image url" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideoURL" label="Youtube Video Url" className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => { setVideo({ ...video, videoURL: e.target.value }) }}
              placeholder="video url" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit} >Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo