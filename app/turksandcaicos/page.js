import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import styles from './page.module.css';

export default function TurksAndCaicos() {
    return (
        <div className={styles.bg}>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Image src="homepage/1.png" className='my-4' thumbnail />
                        <Image src="homepage/1.png" thumbnail />
                        <Image src="homepage/1.png" className='my-4' thumbnail />
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src="homepage/1.png" className='my-4' thumbnail />
                        <Image src="homepage/1.png" thumbnail />
                        <Image src="homepage/1.png" className='my-4' thumbnail />
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src="homepage/1.png" className='my-4' thumbnail />
                        <Image src="homepage/1.png" thumbnail />
                        <Image src="homepage/1.png" className='my-4' thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
