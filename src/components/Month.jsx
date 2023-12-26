import React from 'react'

const Month = () => {
  return (
    <section className='max-w-[450px] m-auto px-4 pb-7'>
        <div className='flex justify-between gap-2 border rounded  p-2 mb-2 bg-gray04 '>
            <div className='bg-gray05 p-1 rounded text-center'>
                <div className='flex items-center w-auto'>
                    <span className='text-4xl'>JAN</span>
                    <span  style={{writingMode:'vertical-lr'}} className='text-xs font-medium'>2023</span>
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

export default Month