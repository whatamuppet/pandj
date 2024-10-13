'use client';

import { basePath } from '@/next.config.mjs';
import { Container } from 'react-bootstrap';

export default function HomePage() {

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
                <h1 className="text-center text-white">Welcome to the homepage!</h1>
            </Container>
        </div>
    );
}