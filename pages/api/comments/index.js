import comment from '../../../Data/CommentData.json'


export default function API(req,res) {
    if(req.method==='GET'){
        res.status(200).json(comment)
    }
    else if(req.method==='POST'){
        comment.push({
            "id":10,
            "name":req.body.post,
            "post":115,
            "likes":1490
        },)
        res.status(200).send(comment)
    }
}
