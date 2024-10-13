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
        async function fetchImages() {
            const res = await fetch(`${basePath}/api/images?folder=homepage`);
            if (!res.ok) {
                console.error('Failed to fetch images:', res.statusText);
                return;
            }
            const data = await res.json();
            setCardsData(data);
        }
    
        fetchImages();
    }, []);

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
                            <Card border='dark'>
                                <Card.Img variant="top" src={card.src} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}