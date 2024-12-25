import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul className="min-w-max leading-8">
                <li className="font-bold text-xl mb-1"><Link href="/">Anna Vo</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
}