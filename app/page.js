'use client';

import { basePath } from '@/next.config.mjs';
import { Container } from 'react-bootstrap';
import styles from './page.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {
    const handleVideoClick = (event) => {
        event.target.currentTime = 0;
        event.target.play();
    };

    return (
        <>
            <div className={styles.bodyBackground}></div>
            <Container fluid className='my-5 text-center'>
                <Row className='mb-5'>
                    <Col>
                        <video autoPlay muted onClick={handleVideoClick}>
                            <source src={`${basePath}/homepage/map_usa.webm`} type="video/webm" />
                        </video>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <video autoPlay muted onClick={handleVideoClick}>
                            <source src={`${basePath}/homepage/map_world.webm`} type="video/webm" />
                        </video>
                    </Col>
                </Row>
            </Container>
        </>
    );
}