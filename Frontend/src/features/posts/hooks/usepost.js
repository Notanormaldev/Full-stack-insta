import { useContext, useEffect } from "react"
import { postcontext } from "../post.context"
import { createfeed, getfeed, likepost, unlikepost } from "../services/post.api"

export const usepost =()=>{

    const context = useContext(postcontext)
    const {loading,feed,post,setloading,setfeed,setpost} = context

    async function handlefeed(){
        setloading(true)
        try {
            const res = await getfeed()
            const posts = Array.isArray(res?.posts) ? res.posts : []
            setfeed(posts.reverse())
        } catch (error) {
            console.error("Feed load failed:", error)
            setfeed([])
        } finally {
            setloading(false)
        }
    }

    async function handlecreatepost(imagefile,caption){
        setloading(true)
        try {
            const res = await createfeed(imagefile,caption)
            setfeed([res.post, ...(Array.isArray(feed) ? feed : [])])
        } catch (error) {
            console.error("Create post failed:", error)
        } finally {
            setloading(false)
        }
    }
    
   async function handlelikepost(postid){
       setloading(true)
       try {
           await likepost(postid)
           await handlefeed()
       } catch (error) {
           console.error("Like post failed:", error)
       } finally {
           setloading(false)
       }
   }
  

   async function handleunlikepost(postid){  
       setloading(true)
       try {
           await unlikepost(postid)
           await handlefeed()
       } catch (error) {
           console.error("Unlike post failed:", error)
       } finally {
           setloading(false)
       }
   }

    return({handlefeed,loading,feed,post,handlecreatepost,handlelikepost,handleunlikepost})

}