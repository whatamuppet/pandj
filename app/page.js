'use client';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './page.module.css';
import Card from 'react-bootstrap/Card';
import { basePath } from '../next.config.mjs';

export default function Home() {

    const cardsData = [
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
        {
            src: "homepage/1.png",
            text: "Caption"
        },
    ];

    const bgStyle = {
        backgroundImage: `url(${basePath}/homepage/bg.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh'
    };

    return (
        <div style={bgStyle}>
            <Container>
                <Row xs={1} md={3} className="g-4 p-3">
                    {cardsData.map((card, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={card.src} />
                                <Card.Body>
                                    <Card.Text>
                                        {card.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}