import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Journal = () => {

  const semiFanalCount = useSelector((state) => state)
  let finalCount = semiFanalCount.counter.value
  return (
    <>
      <section>
        <div className="max-w-container mx-auto">
        <h1 className='text-[42px]'>{finalCount}</h1>
        </div>
      </section>
    </>
  )
}

export default Journal