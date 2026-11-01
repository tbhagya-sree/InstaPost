import React, { useState } from 'react'

const Post = (props) => {
  // PART 4 - State MUST be named likes, setLikes
  const [likes, setLikes] = useState(0)

  // PART 5 - Function MUST be named handleLikes
  const handleLikes = () => {
    setLikes(likes + 1)
    console.log(likes + 1)
  }

  return (
    <div className="post-card">
      <img src={props.image} alt={props.name} className="post-image" />
      <div className="post-info">
        <p className="post-name">{props.name}</p>
        <button onClick={handleLikes} className="like-btn">
          ❤️ likes {likes}
        </button>
      </div>
    </div>
  )
}

export default Post