import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Day from './components/Day'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'
import Form from './components/Form'
import ListTask from './components/ListTask'

function App() {
  const [tab,setTab]=useState('day');
  const [date,setDate]=useState(new Date());
  const [tasks,setTasks]=useState(()=>{
    const tasks=localStorage.getItem('tasks');
    return (tasks)?JSON.parse(tasks):[];
  }); // [{id:1,task:'task1',completed:false,date:new Date()}
  
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  function renderComponentBasedOnTab(tab){
    if(tab==='day'){
      return <>
        <Day date={date} setDate={setDate}/>
        <Form date={date} tasks={tasks} setTasks={setTasks}/>
        <ListTask date={date} tasks={tasks} setTasks={setTasks}/>
      </>
    }else if(tab==='week'){
      return <Week tasks={tasks}/>
    }else if(tab==='month'){
      return <Month tasks={tasks}/>
    }else if(tab==='year'){
      return <Year tasks={tasks}/>
    }
  }

  return (
    <main>
      
        <h1 className="text-3xl font-bold underline text-red01">
          Hello world!
        </h1>
        <div className='bg-gray03 text-white rounded max-w-[600px] m-auto'>
          <Header tab={tab} setTab={setTab}></Header>
          { renderComponentBasedOnTab(tab) }

          

        </div>
    </main>
  )
}

export default App
