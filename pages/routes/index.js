import { useState,useEffect } from 'react'

export default function Routes() {

    const [data, setdata] = useState([])

    const [input, setinput] = useState('')

    const deleteData =async(id)=>{
        const res=await fetch(`api/comments/${id}`,{
            method:'DELETE'
        })
        const d=await res.json()
        setdata(d)
    }

    const saveData=async()=>{
        const res =await fetch('/api/comments',{
            method:"POST",
            body:JSON.stringify({post:input}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const s=await res.json()
        setdata(s)
    }

    const getData= async ()=>{
        const res= await fetch('/api/comments')
        const json=await res.json()
        setdata(json)
    }

    return (
        <div>
            <input type="text" onChange={(e)=>{setinput(e.target.value)}}/>
            <button onClick={saveData}>Save</button>
            <button onClick={getData}>Click</button>
            {
                data.map((comment)=>(
                    <div key={comment.id}>
                        <b>{comment.name}: </b>
                        <span>{comment.post}</span>
                        <button onClick={()=>{deleteData(comment.id)}}>Delete</button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}
