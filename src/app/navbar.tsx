import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul className="hidden sm:block min-w-max p-6 leading-8 rounded-2xl text-orange-950 bg-orange-50">
                <li className="text-rose_red font-bold text-xl mb-2 hover:text-rose_red/80 font-dynapuff"><Link href="#page_top">Anna Vo</Link></li>
                <li className="hover:text-tan"><Link href="#about">About</Link></li>
                <li className="hover:text-tan"><Link href="#projects">Projects</Link></li>
            </ul>
        </nav>
    );
}