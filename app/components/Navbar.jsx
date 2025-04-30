import Link from 'next/link';

export default function Navbar(){
    return (
        <div className='navbar'>
            <div className='container'>
                <h1 className='logo'>TripTailor</h1>
                <ul className='nav-links'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/explore">Explore</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}