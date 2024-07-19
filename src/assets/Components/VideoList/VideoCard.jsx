import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addHistory } from '../../../Services/allApi';
import { toast } from 'react-toastify';

function VideoCard({ video, setData, char }) {
    const [show, setShow] = useState(false);

    const handleShow = async () => {
        const time = new Date()
        const data = {
            videoID: video.id,
            videoURL: video.videoURL,
            caption: video.caption,
            dateTime: time
        }
        const res = await addHistory(data)
        console.log('---------------------history added-------------------', res)
        setShow(true)
    };
    const handleClose = () => setShow(false);


    const trash = async () => {
        const res = await deleteVideo(video.id)
        if (res.status === 200) {
            setData(res)
            toast.success('Video Uploaded successfully')
        } else {
            toast.info('something went wrong')
            console.log(res)
        }
    }


    const handleDrag = (e, videoData) => {
        console.log('-------dragging------', videoData)
        e.dataTransfer.setData('videoData', JSON.stringify(videoData))
    }
    return (
        <>
            <div className='p-3 '>
                <Card style={{ width: '18rem' }} draggable="true" onDragStart={(e) => { handleDrag(e, video) }}  >
                    <Card.Img variant="top" onClick={handleShow} style={{ cursor: 'pointer' }} height={140} width={80}
                        src={video.image} />
                    <Card.Body>
                        <Card.Title>{video.caption}</Card.Title>
                        {!char &&
                            <Button variant="danger" className='fs-5' onClick={trash}>🗑️</Button>
                        }
                    </Card.Body>
                </Card>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">{video.caption}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            width='100%'
                            height={315}
                            src={video.videoURL}
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen=""
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default VideoCard