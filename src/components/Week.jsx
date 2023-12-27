import React from 'react'
import { getNameDay } from '../helpers/getNameDay';
import { getNameMonth } from '../helpers/getNameMonth';


const Task = ({ daytasks }) => {
    const date = new Date(daytasks.date);
    const tasks = daytasks.tasks;

    return (
        <div className='flex justify-between gap-2 border rounded  p-2 mb-2 bg-gray04 '>
            <div className='bg-gray05 p-1 rounded min-w-[78px] text-center h-fit'>
                <span>{getNameDay(date)}</span>
                <div className='flex justify-center items-center'>
                    <span className='text-4xl'>{date.getDate()}</span>
                    <span style={{ writingMode: 'vertical-lr' }} className='text-xs font-medium'>{getNameMonth(date)}</span>
                </div>
            </div>
            <div className='flex items-start gap-2 flex-wrap text-xs [&>span]:border [&>span]:rounded'>
                {
                    tasks.map(task => <span key={task.id}>{task.task}</span>)
                }
            </div>
        </div>
    )
}

const Week = ({ tasks }) => {

    function filterTasksByWeek(tasks) {
        const date = new Date();
        const currentDay = date.getDay();

        const week = {
            sunday: { date: date.setDate(date.getDate() - currentDay), tasks: [] },
            monday: { date: date.setDate(date.getDate() + 1), tasks: [] },
            tuesday: { date: date.setDate(date.getDate() + 1), tasks: [] },
            wednesday: { date: date.setDate(date.getDate() + 1), tasks: [] },
            thursday: { date: date.setDate(date.getDate() + 1), tasks: [] },
            friday: { date: date.setDate(date.getDate() + 1), tasks: [] },
            saturday: { date: date.setDate(date.getDate() + 1), tasks: [] }
        }

        tasks.forEach(task => {
            const taskDate = new Date(task.date).toLocaleDateString();
            console.log(taskDate);
            if (taskDate === new Date(week.sunday.date).toLocaleDateString()) {
                week.sunday.tasks.push(task);
            } else if (taskDate === new Date(week.monday.date).toLocaleDateString()) {
                week.monday.tasks.push(task);
            }
            else if (taskDate === new Date(week.tuesday.date).toLocaleDateString()) {
                week.tuesday.tasks.push(task);
            }
            else if (taskDate === new Date(week.wednesday.date).toLocaleDateString()) {
                week.wednesday.tasks.push(task);
            }
            else if (taskDate === new Date(week.thursday.date).toLocaleDateString()) {
                week.thursday.tasks.push(task);
            }
            else if (taskDate === new Date(week.friday.date).toLocaleDateString()) {
                week.friday.tasks.push(task);
            }
            else if (taskDate === new Date(week.saturday.date).toLocaleDateString()) {
                week.saturday.tasks.push(task);
            }
        });

        return week;
    }

    return (
        <section className='max-w-[450px] m-auto px-4 pb-7'>
            {
                Object.keys(filterTasksByWeek(tasks)).map((day, index) => <Task key={index} daytasks={filterTasksByWeek(tasks)[day]} />)
            }
        </section>
    )
}

export default Week