import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Landing() {
    return (
        <>
            <div>
                <div>
                    <Row>
                        <Col sm={12} md={6} className='p-4 d-flex flex-column justify-content-center align-items-center'>
                            <h1>Media PLayer</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugiat.
                            </p>
                            <Link to={'/home'} >
                                <button className='btn btn-primary border shadow rounded'>GO </button>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} className=''>
                            <img src="https://img.freepik.com/premium-vector/minimalist-illustration-dvd-cd-vhs-player-white-color-retro-tech-80s-90s-nostalgia_621211-162.jpg" alt="" />
                        </Col>
                    </Row>

                    <div className='my-5'>
                        <h3 className='text-info text-center'>Features</h3>
                        <div className='d-flex justify-content-evenly mt-4'>
                            <Row>
                                <Col sm={12} md={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" height={230} src="https://cdn-lhalb.nitrocdn.com/GUKyUHlVnRTXLBhjipzpWxaqlUzloLOa/assets/images/optimized/rev-380e404/www.zellusmarketing.com/wp-content/uploads/2021/03/icon-1.1s-326px-1.gif" />
                                        <Card.Body>
                                            <Card.Title>Manage Videos</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" height={230} src="https://i.pinimg.com/originals/fb/d6/36/fbd636d695a9c16d1a24cb850241f943.gif" />
                                        <Card.Body>
                                            <Card.Title>Upload Video</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" height={230} src="https://cdn.dribbble.com/users/740666/screenshots/2841108/green_monster_gif.gif" />
                                        <Card.Body>
                                            <Card.Title>Watch History</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='p-5'>
                        <Row>
                            <Col sm={12} md={8}>
                                <h3 className='text-info'>Behold </h3>
                                <p className='text-justify'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates facere ex asperiores? Neque cum error quaerat facere laborum consequatur natus totam repellendus atque. Laborum suscipit eum nihil perspiciatis doloremque placeat amet reiciendis dolorum non, eaque qui enim delectus quia eveniet eligendi autem tempora, quis temporibus distinctio! Rerum, maiores laborum?
                                </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <iframe
                                    width="100%"
                                    height={315}
                                    src="https://www.youtube.com/embed/SqcY0GlETPk?si=Wupi4MKeNBh8izQf"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen=""
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing