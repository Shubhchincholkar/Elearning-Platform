import { useEffect, useState } from 'react'

const Courses = () => {
  let [count, setCount] = useState(0)

  useEffect(() => {
    alert("Re-rendered ")
  })

  useEffect(() => {
    alert("Re-rendered ")
  }, [])

  useEffect(() => {
    alert("Re-rendered ")
  }, [count])



  return (
    <div className='h-[80vh] w-screen bg-black text-white text-4xl flex items-center justify-center flex-col gap-8'>
      <button onClick={() => {
        setCount(count + 1)
      }} className='border-2 border-white p-6 rounded-4xl'>
        Increase
      </button>
      {count}
    </div>
  )
}

export default Courses