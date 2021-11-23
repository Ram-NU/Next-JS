export default function UserData({ users }){
    return (
        <>
            {
                users.map((user)=>(
                    <div key={user.id}>
                        <b>{user.name}</b>
                        <i>{user.address.city}</i>
                        <i>{user.email}</i>
                    </div>
                ))
            }      
        </>
    )
}