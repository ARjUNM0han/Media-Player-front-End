import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddVideo from '../../Components/AddVideo/AddVideo'
import Category from '../../Components/Category/Category'
import VideoList from '../../Components/VideoList/VideoList'
import { Link } from 'react-router-dom'

function Home() {

  useEffect(() => {
    document.title = 'Media Player | Home'
  }, [])


  const [addResponse, setAddResponse] = useState('')

  return (
    <>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between'>
          <h3>All Videos</h3>
          <Link className='p-2' to={'/history'} >Watch History </Link>
        </div>

        <div>
          <Row>
            <Col sm={12} md={1}>
              <AddVideo setData={setAddResponse} />
            </Col>
            <Col sm={12} md={8}>
              <VideoList setRes={addResponse} />
            </Col>
            <Col sm={12} md={3}>
              <Category />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Home