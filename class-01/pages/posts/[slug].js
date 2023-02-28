import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()

    console.log(router)
    return (
        <div> 
            Página de Post {router.query.slug}
        </div>
    )
}