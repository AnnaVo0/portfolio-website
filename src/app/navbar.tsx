import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul className="hidden sm:block min-w-max p-6 leading-8 rounded-2xl text-orange-950 bg-orange-50">
                <li className="font-bold text-lg mb-1 hover:text-orange-900"><Link href="#page_top">Anna Vo</Link></li>
                <li className="hover:text-tan"><Link href="#about">About</Link></li>
                <li className="hover:text-tan"><Link href="#projects">Projects</Link></li>
            </ul>
        </nav>
    );
}