import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../slice/counterSlice'

const Shop = () => {
  let [count, setCount] = useState(0)

  const countSelect = useSelector((state) => state)
  console.log(countSelect);
  const dispatch = useDispatch()


  let handleIncrement = ()=>{
    count++
    setCount(count)
    dispatch(increment(count))
  }

  let handleDecrement = ()=>{
      count--
      setCount(count)
      dispatch(decrement(count))
  }
  return (
    <>
      <section>
        <div className="max-w-container mx-auto">
          <button className='text-[32px] bg-slate-400' onClick={handleIncrement}>Increment</button>
            <h1 className='text-[42px]'>{count}</h1>
          <button className='text-[32px] bg-slate-400' onClick={handleDecrement}>Decrement</button>
        </div>
      </section>
    </>
  )
}

export default Shop