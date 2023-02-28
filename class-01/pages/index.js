import Link from "next/link"

function HomePage() {
    return (
        <div>
            <div>Welcome to Next.js!</div>

            <img src="/images/avatar.jpeg" />
            <ul>
                <li>
                    <Link href="/about">
                        Go to /about
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage