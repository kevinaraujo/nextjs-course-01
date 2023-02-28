import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()

    console.log(router)
    return (
        <div>
            Página de Post {router.query.slug}

            <ul>
                <li>
                    <Link href="/">
                        Go to Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}