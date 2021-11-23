import { useRouter } from "next/router"


export default function Comment({ comments }) {

    const router=useRouter()

    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Comments:</h1>
           
            <div key={comments.id}>
                <b>{comments.name}</b>
                <b>{comments.post}: </b>
                <span>{comments.likes}</span>
                <hr/>
            </div>
              
        </>
    )
}

export async function getStaticPaths(){
    return {
        paths:[
            {
                params:{ comment: '1'}
            },
            {
                params:{ comment: '2'}
            },
        ],
        fallback:'blocking'
    }
}

export async function getStaticProps(context){
    
    const {params}=context
    const response=await fetch(`http://localhost:5000/comments/${params.comment}`)
    const data=await response.json()


    if(!data){
        return {
            notFound:true
        }
    }

    return {
        props:{
            comments:data
        },
        revalidate:10
    }
}