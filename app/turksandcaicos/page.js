'use client';

import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { basePath } from '@/next.config.mjs';

export default function TurksAndCaicos() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch(`${basePath}/turksandcaicos.json`)
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

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