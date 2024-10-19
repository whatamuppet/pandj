'use client';

import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Alert from 'react-bootstrap/Alert';
import { basePath } from '@/next.config.mjs';

export default function TurksAndCaicos() {
    const [cardsData, setCardsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        fetch(`${basePath}/turksandcaicos.json`)
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cardsData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(cardsData.length / itemsPerPage);
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Container className='my-4'>
            <Alert className='text-center fs-2' variant='primary'>
                Turks and Caicos Islands
            </Alert>
            <div className="d-flex justify-content-end">
                <Pagination className='mb-3'>{items}</Pagination>
            </div>
            <Row xs={1} md={3} className="g-4">
                {currentItems.map((card, idx) => (
                    <Col key={idx}>
                        <Card bg='dark' border='white' className='text-white border-2'>
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
            <div className="d-flex justify-content-end mt-3">
                <Pagination>{items}</Pagination>
            </div>
        </Container>
    );
}