import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link> | <Link href="/about">About</Link>
            </nav>
            <h1>Welcome to My Next.js Website</h1>
            <p>This is the homepage.</p>
        </div>
    );
}
