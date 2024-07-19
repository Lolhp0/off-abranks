import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center flex-row gap-2' role='status' aria-hidden="true">
        <span className='p-2 bg-stone-700 rounded-full animate-[600ms_infinite_bounce]'></span>
        <span className='p-2 bg-stone-700 rounded-full animate-[800ms_infinite_bounce]'></span>
        <span className='p-2 bg-stone-700 rounded-full animate-bounce'></span>
    </div>
  )
}

export default Loader
