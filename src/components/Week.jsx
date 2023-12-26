import React from 'react'

const Week = () => {
  return (
    <section className='max-w-[450px] m-auto px-4 pb-7'>
        <div className='flex justify-between gap-2 border rounded  p-2 mb-2 bg-gray04 '>
            <div className='bg-gray05 p-1 rounded min-w-[78px] text-center h-fit'>
                <span>Domingo</span>
                <div className='flex justify-center items-center'>
                    <span className='text-4xl'>30</span>
                    <span  style={{writingMode:'vertical-lr'}} className='text-xs font-medium'>JUL</span>
                </div>
            </div>
            <div className='flex items-start gap-2 flex-wrap text-xs [&>span]:border [&>span]:rounded'>
                <span>Tarea domingo</span>
                <span>Another task</span>
                <span>This is my task</span>
            </div>
        </div>
    </section>
  )
}

export default Week