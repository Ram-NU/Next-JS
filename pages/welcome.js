import Link from 'next/link'
import { useRouter } from 'next/router'

export default function welcome() {

    const router=useRouter()

    const handleClick=()=>{
        router.push('/route')
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <Link href="/route" replace>Route</Link>
            <button onClick={handleClick}>Route Button</button>
        </div>
    )
}
