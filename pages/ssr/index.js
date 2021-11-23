import Link from 'next/link'

export default function SSR({ comments }) {
    return (
        <>
            {
                comments.map((comment)=>(
                    <div key={comment.id}>
                        <Link href={`/ssr/${comment.id}`} passHref>
                            <a>
                                <b>{comment.name}: </b>
                                <span>{comment.post}</span>
                            </a>
                        </Link>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
}

export async function getServerSideProps(){

    const res= await fetch('http://localhost:5000/comments')
    const data= await res.json()


    return{
        props:{
            comments:data
        }
    }
}
