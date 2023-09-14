
import { useState } from 'react'
import './App.css'
import Avengers from './components/Avengers/Avengers'
import Bookmarks from './components/Avengers/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [remaining, setRemaining] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  const handleAddToBookmarks = (avenger) => {

    const isExist = bookmarks.find(bookmark => bookmark.id === avenger.id)

    let count = avenger.salary
    if (isExist) {
      return alert("Already Booked!")
    } else {

      bookmarks.forEach(bookmark => {
        count = count + bookmark.salary
      })

      // console.log(count);


      const remainingBalance = 20000 - count
      if (count > 20000) {
        return alert("Insufficient Balance!")
      } else {
        setTotalCost(count)
        setRemaining(remainingBalance);

        const newBookmarks = [...bookmarks, avenger]
        setBookmarks(newBookmarks)
      }


    }

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

        <Bookmarks bookmarks={bookmarks} totalSalary={totalSalary} remaining={remaining} totalCost={totalCost} ></Bookmarks>
      </div>
    </>
  )
}

export default App
