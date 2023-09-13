
import { useState } from 'react'
import './App.css'
import Avengers from './components/Avengers/Avengers'
import Bookmarks from './components/Avengers/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = (avenger) => {
    const newBookmarks = [...bookmarks, avenger]
    setBookmarks(newBookmarks)
  }

  const [totalSalary, setTotalSalary] = useState(0)

  const handleAddTotalSalary = (salary) => {
    const newTotalSalary = totalSalary + salary
    setTotalSalary(newTotalSalary)
  }


  return (
    <>
      <div className='max-w-screen-xl mx-auto my-5 px-8 md:px-16 lg:px-24 flex'>

        <Avengers handleAddToBookmarks={handleAddToBookmarks} handleAddTotalSalary={handleAddTotalSalary}></Avengers>

        <Bookmarks bookmarks={bookmarks} totalSalary={totalSalary}></Bookmarks>
      </div>
    </>
  )
}

export default App
