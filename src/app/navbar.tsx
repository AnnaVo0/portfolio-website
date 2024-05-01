import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="PLACEHOLDER">
            <Image 
                src="/../public/favicon.ico"
                width={100}
                height={100}
                alt="favicon"
            />
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/illustrations">Illustrations</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}