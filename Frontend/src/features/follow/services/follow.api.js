import axios from 'axios'

const api = axios.create({
    baseURL:'https://full-stack-insta.onrender.com',
    withCredentials:true
})

export async function followdets(){
    const res =await api.get('/api/ff/getfollowdets')
    return res.data
}


export async function follow(userid){
    const res =await api.post('/api/ff/follow/'+userid)
    return res.data
}

export async function unfollow(userid){
    const res =await api.post('/api/ff/unfollow/'+userid)
    return res.data
}


export async function otheruserapi(){
    const res =await api.get('/otheruser')
    return res.data
}


