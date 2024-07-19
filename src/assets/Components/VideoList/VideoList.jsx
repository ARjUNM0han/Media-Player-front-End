import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideo } from '../../../Services/allApi'
import { Row, Col } from 'react-bootstrap'

function VideoList({ setRes }) {

  const [videoData, setVideoData] = useState([])
  const [delRes, setDelRes] = useState('')


  const getData = async () => {
    const videos = await getVideo()
    setVideoData(videos.data)
    // console.log(videos.data)
  }

  useEffect(() => {
    getData();
  }, [setRes ,delRes])

  return (
    <>
      {videoData.length > 0 ?
        <div className='border border-white rounded mb-5 row justify-content-around'>
          <Row>
            {
              videoData.map((i) => (
                <Col key={i.id}>
                  <VideoCard  video={i} setData={setDelRes} />
                </Col>
              ))
            }
          </Row>
        </div>
        :
        <h3 className='text-danger text-center'>No Videos Found</h3>
      }
    </>
  )
}

export default VideoList