import React from 'react'
import '../style/followercompo.scss'

function Follower({follower}) {
  // console.log(follower);
  
  return (
    <div className='follower-compo'>
           <img src="https://ik.imagekit.io/r5nxypvid/image.png?updatedAt=1778947673109" alt="" />
            <h1>{follower}</h1>
    </div>
  )
}

export default Follower
