import comments from '../../../Data/CommentData.json'

export default function Comment(req,res) {
    if(req.method==='DELETE'){

        const {comment}=req.query
        
        const index=comments.findIndex((data)=>data.id===parseInt(comment))
        comments.splice(index,1)
        res.status(200).json(comments)
    }
    else if(req.method==='GET'){
        const {comment}=req.query

        const data=comments.filter((i)=>i.id===parseInt(comment))
        res.status(200).json(data)
    }
}
