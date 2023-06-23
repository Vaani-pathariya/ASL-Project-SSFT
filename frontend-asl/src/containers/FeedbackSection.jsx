import React from 'react'

const FeedbackSection = () => {
  return (
    <div className='feedback bg-cyan-500 py-20'>
      <div className='bg-slate-900 m-auto px-32 py-12 rounded-xl w-4/5 flex justify-between'>
    <div className='text-white'>
    <div className='text-4xl mb-4 font-semibold'>Let's try our service now !</div>
    <div className='w-3/5 text-slate-300'>Everything you need to aceept card payments and grow your business anywhere on the planet.</div>
    </div>
    <div className='flex items-center'>
    <button className='bg-cyan-500 py-3 px-8 rounded-lg font-semibold'>Get started</button>
    </div>
      </div>
    </div>
  )
}

export default FeedbackSection