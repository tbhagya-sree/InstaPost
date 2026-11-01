import React from 'react'
import Post from './components/post.jsx'
import './App.css'

// You can use local images or online links
// import image1 from './images/image1.jpg'
// For now I am using online images so it works instantly
const image1 = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
const image2 = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
const image3 = "https://images.unsplash.com/photo-1517841905240-472988babdf9"

const App = () => {
  return (
    <div className='posts'>
      <h1>Mini Image Feed</h1>
      
      <Post image={image1} name="Beach" />
      <Post image={image2} name="sindhu" />
      <Post image={image3} name="Priya" />
    </div>
  )
}

export default App