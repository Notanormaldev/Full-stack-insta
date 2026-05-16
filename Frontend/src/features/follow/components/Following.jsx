import React from 'react'
import '../style/followingcompo.scss'
function Following({following}) {
  return (
      <div className='following-compo'>
           <img src="https://ik.imagekit.io/r5nxypvid/image.png?updatedAt=1778947673109" alt="" />
            <h1>{following}</h1>

    </div>
  )
}

export default Following
