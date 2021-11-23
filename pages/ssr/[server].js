

export default function Server({ comments }) {
    return (
        <>   
            <div key={comments.id}>
                <b>{comments.name}: </b>
                <span>{comments.likes}</span>
                <hr/>
            </div>   
        </>
    )
}


export async function getServerSideProps(context){

    const {params}=context


    const res= await fetch(`http://localhost:5000/comments/${params.server}`)
    const data= await res.json()


    return{
        props:{
            comments:data
        }
    }
}
