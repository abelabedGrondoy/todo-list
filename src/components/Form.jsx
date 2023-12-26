import React from 'react'
import TextL from './icons/TextL'
let nextId = 0;
const Form = ({date,tasks,setTasks}) => {
  function addTask(e){
    const newTask={
      id:nextId++,
      task:e.target[0].value,
      completed:false,
      date:date
    }
    e.preventDefault();
    setTasks([...tasks,newTask]);
    e.target[0].value='';
  }
  return (
    <section className='max-w-[450px] m-auto my-3 px-4'>
        <div className='w-full p-2 rounded bg-gray04 border border-gray02 text-white flex items-center'>
            <span className='mr-2'><TextL className="stroke-gray02"/></span>
            <form className='w-full' onSubmit={addTask}>
                <input type="text" className='w-full bg-transparent outline-none' placeholder='Add a task...'/>
            </form>
        </div>
    </section>
  )
}

export default Form