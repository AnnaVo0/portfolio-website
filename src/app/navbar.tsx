import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul className="hidden sm:block min-w-max p-6 leading-8 rounded-2xl text-orange-950 bg-orange-50">
                <li className="font-bold text-lg mb-1"><Link href="#about">Anna Vo</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
}