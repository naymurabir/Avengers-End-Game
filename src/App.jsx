
import { useState } from 'react'
import './App.css'
import Avengers from './components/Avengers/Avengers'
import Bookmarks from './components/Avengers/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = (avenger) => {
    // console.log(avenger);
    const newBookmarks = [...bookmarks, avenger]
    setBookmarks(newBookmarks)
  }


  return (
    <>
      <div className='max-w-screen-xl mx-auto my-5 px-8 md:px-16 lg:px-24 flex'>
        <Avengers handleAddToBookmarks={handleAddToBookmarks}></Avengers>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
