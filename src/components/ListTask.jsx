import React from 'react'
import Dots from './icons/Dots'

const Task = ({ task,tasks, setTasks }) => {
  return (
    <div className='flex justify-between gap-4 items-center my-4'>
      <span className='cursor-pointer flex items-center'>
        <input type="checkbox" name="" id="" className='checkbox'  
          checked={task.completed}
          onChange={e => {
            setTasks(tasks.map(t => {
              if (t.id === task.id) {
                return {
                  ...t,
                  completed: e.target.checked
                }
              } else {
                return t
              }
            }))
          }}
        />
      </span>
      <p className='grow text-left'>{task.task}</p>
      <span className='cursor-pointer'>
        <Dots className="fill-gray02" />
      </span>
    </div>
  )
}

const ListTask = ({ date, tasks, setTasks }) => {
  function filterTasksByDate(tasks, date) {
    return tasks.filter(task => task.date.toLocaleDateString() === date.toLocaleDateString())
  }
  return (
    <section className='max-w-[450px] m-auto pb-7 pt-1 px-4'>
      {
        filterTasksByDate(tasks,date).map(task => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />)
      }
    </section>
  )
}
export default ListTask