import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Menu() {



    return (
        <Container className="my-5">
            <h5 className="my-5 text-center display-4">Welcome to Mallu's Food Court</h5>
            <Row>

                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="https://www.foodandwine.com/thmb/i9SamRQmWvCB0uf-uHxRdIBG37o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cioppino-FT-RECIPE0521-4699a9c202574e5cb10232128b0aa90a.jpg" style={{ height: '270px' }} />
                        <Card.Body>
                            <Card.Title>Fish Items</Card.Title>
                            <Card.Text>
                                Here's some Fish Specials
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View More</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="https://www.crazymasalafood.com/wp-content/images/tandoori-chicken-1.png"style={{ height: '270px' }}/>
                        <Card.Body>
                            <Card.Title>Chicken Items</Card.Title>
                            <Card.Text>
                                Here's some Chicken Specials
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View More</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="https://c4.wallpaperflare.com/wallpaper/464/542/450/photo-vegetables-food-meat-products-wallpaper-preview.jpg" />
                        <Card.Body>
                            <Card.Title>Meat Items</Card.Title>
                            <Card.Text>
                                Here's some Meat Specials
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View More</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QiGa3Cn0IJopi5J59OC1xdW79YjhPdAqlA&usqp=CAU"style={{ height: '270px' }}/>
                        <Card.Body>
                            <Card.Title>Veg Items</Card.Title>
                            <Card.Text>
                                Here's some Veg Specials
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View More</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>





            </Row>

        </Container>


    );
}

export default Menu;