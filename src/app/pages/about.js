import Link from 'next/link';

export default function About() {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link> | <Link href="/about">About</Link>
            </nav>
            <h1>About Page</h1>
            <p>This is the about page of the website.</p>
        </div>
    );
}