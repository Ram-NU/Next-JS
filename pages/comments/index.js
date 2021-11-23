import Link from 'next/link'

export default function Comments({ comments }) {
    return (
        <>
            <h1>Comments:</h1>
            {
                comments.map((comment)=>(
                    <div key={comment.id}>
                        <Link href={`/comments/${comment.id}`} passHref>
                            <a>
                                <b>{comment.name}:  </b>
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

export async function getStaticProps(){
    
    const response=await fetch('http://localhost:5000/comments/')
    const data=await response.json()
    return {
        props:{
            comments:data
        },
        revalidate:10
    }
}