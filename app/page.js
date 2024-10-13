'use client';

import { basePath } from '@/next.config.mjs';
import { Container } from 'react-bootstrap';
import styles from './page.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useRef } from 'react';

export default function HomePage() {
    const [showOverlay1, setShowOverlay1] = useState(true);
    const [showOverlay2, setShowOverlay2] = useState(true);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    const handleVideoClick = (videoRef, setShowOverlay) => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setShowOverlay(false);
        }
    };

    const handleVideoEnd = (setShowOverlay) => {
        setShowOverlay(true);
    };

    return (
        <>
            <div className={styles.bodyBackground}></div>
            <Container fluid className='my-5 text-center'>
                <Row className=''>
                    <Col>
                        <h1 className={styles.heading}>Our Travel Videos</h1>
                        <p className={styles.description}>
                            Below are videos showcasing the places we've visited. Click on the videos to explore our journey.
                        </p>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <div className={styles.videoContainer}>
                            {showOverlay1 && (
                                <div className={styles.overlay} onClick={() => handleVideoClick(videoRef1, setShowOverlay1)}>
                                    Click to Play
                                </div>
                            )}
                            <video
                                ref={videoRef1}
                                muted
                                onEnded={() => handleVideoEnd(setShowOverlay1)}
                            >
                                <source src={`${basePath}/homepage/map_usa.webm`} type="video/webm" />
                            </video>
                            <p className={styles.caption}>USA Map</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.videoContainer}>
                            {showOverlay2 && (
                                <div className={styles.overlay} onClick={() => handleVideoClick(videoRef2, setShowOverlay2)}>
                                    Click to Play
                                </div>
                            )}
                            <video
                                ref={videoRef2}
                                muted
                                onEnded={() => handleVideoEnd(setShowOverlay2)}
                            >
                                <source src={`${basePath}/homepage/map_world.webm`} type="video/webm" />
                            </video>
                            <p className={styles.caption}>World Map</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}