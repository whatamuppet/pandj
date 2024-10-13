import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavBar from "./components/NavBar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: "P and J's Next.js App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}