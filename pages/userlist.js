import UserData from '../components/userData'

function userList({ users }) {
    return (
        <>
            <h1>Users:</h1> 
            <UserData users={users}/>
        </>
    )
}

export default userList

export async function getStaticProps(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    return {
        props:{
            users:data
        }
    }
}