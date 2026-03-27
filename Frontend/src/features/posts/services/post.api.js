import axios from 'axios'


const api = axios.create({
    baseURL:'https://full-stack-insta.onrender.com',
    withCredentials:true
})

export async function getfeed(){
    try {
        const res = await api.get('/api/posts/feed')
        return res.data
        
    } catch (error) {
        throw error
        
    }
}

export async function createfeed(imagefile,caption){ 
    const formdata = new FormData()

    formdata.append('img',imagefile)
    formdata.append('caption',caption)


    try {
        const res = await api.post('/api/posts/',formdata)
        return res.data
    } catch (error) {
        throw error
    }
}

export async function likepost(postid){

    
    const res= await api.post('/api/posts/like/'+postid)
    return res.data
}

export async function unlikepost(postid){
   const res = await api.post('/api/posts/unlike/'+postid)
   return res.data
}