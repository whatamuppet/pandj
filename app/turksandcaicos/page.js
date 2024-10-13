'use client';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { basePath } from '@/next.config.mjs';

export default function TurksAndCaicos() {

    const cardsData = [
        {
            src: "turksandcaicos/IMG_6976.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6977.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6978.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6979.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6980.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6981.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6982.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6983.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6984.jpeg",
            text: "Caption"
        },
        {
            src: "turksandcaicos/IMG_6985.jpeg",
            text: "Caption"
        }
    ];

    const bgStyle = {
        backgroundImage: `url(${basePath}/turksandcaicos/bg.jpg)`,
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