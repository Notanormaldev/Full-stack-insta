import axios from 'axios'

const api = axios.create({
    baseURL:"https://full-stack-insta.onrender.com",
    withCredentials:true
})


export async function register(username,email,password){
      try {
        const res = await api.post('/api/auth/register',{
            username,email,password
        })

        return res.data
      } catch (error) {
        throw error
      }
}

export async function login(username,password){
    try {
        const res = await api.post('/api/auth/login',{
            username,password
        })

        return res.data

    } catch (error) {
        throw error
        
    }
}


export async function getme(){
    try {
        const res = await api.get('/api/auth/getme')
        return res.data
    } catch (error) {
        throw error
    }
}