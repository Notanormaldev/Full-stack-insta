import React, { useEffect } from 'react'
import '../style/followlist.scss'
import Follower from './Follower'
import Following from './Following'
import Otheruser from './Otheruser'
import { usefollow } from '../hooks/usefollow'




function Followlist() {
   const {followers , following , handlefollow,handelotheruser,users,followtheuser} = usefollow()
   const followerList = Array.isArray(followers) ? followers : []
   const followingList = Array.isArray(following) ? following : []
   const otherUsers = Array.isArray(users) ? users : []

   useEffect(()=>{
      handlefollow(),handelotheruser()
   },[])
   // console.log(followers);
   
  return (
    <div className='follow-container'>


     <div className="follower">
        <h1>Followers</h1>
        <div className="fl">
               {followerList.map((f,id)=>{
                  return <Follower key={id} follower={f}/>
               })}
        </div>
     </div>


     <div className="following">
        <h1>Following</h1>
        <div className="fl">
          {followingList.map((f,id)=>{
            return <Following key={id} following={f}/>
          })}
          
        </div>
     </div>


       <div className="otheruser">
        <h1>Otheruser</h1>
        <div className="fl">
         {otherUsers.map((o,id)=><Otheruser key={id} otheruser={o} followtheuser={followtheuser}/>)}
        </div>
     </div>

     
    </div>
  )
}

export default Followlist
