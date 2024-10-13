'use client';

import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { basePath } from '@/next.config.mjs';

export default function NewYork() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch(`${basePath}/newyork.json`)
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const bgStyle = {
        backgroundImage: `url(${basePath}/newyork/bg.jpg)`,
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
                                {(card.title || card.date) && (
                                    <Card.Body>
                                        <Card.Text>
                                            {card.title && <span>Title: {card.title}</span>}
                                            {card.title && card.date && <br />}
                                            {card.date && <span>Date: {card.date}</span>}
                                        </Card.Text>
                                    </Card.Body>
                                )}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}