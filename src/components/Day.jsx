import React from 'react'
import ArrowR from './icons/ArrowR'
import ArrowL from './icons/ArrowL'
import { getNameDay } from '../helpers/getNameDay';
import { getDate } from '../helpers/getDate';

const Day = ({date,setDate}) => {

  function addDay(){
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  }
  function substractDay(){
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
  }

  return (
    <section className='flex gap-8 my-20 justify-center items-center'>
        <p className='cursor-pointer' onClick={substractDay}>
          <ArrowL className='fill-gray02'/>
        </p>
        <div className='w-[155px]'>
            <h4 className='text-4xl font-medium text-white'>
            {
              getNameDay(date)
             }
             </h4>
            <p className='text-gray02'>{getDate(date)}</p>
        </div>
        <p className='cursor-pointer' onClick={addDay}>
          <ArrowR className='fill-gray02'/>
        </p>
    </section>
  )
}

export default Day