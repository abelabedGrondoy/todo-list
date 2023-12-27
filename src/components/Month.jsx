import React, { useEffect } from 'react'
import { getNameMonth } from '../helpers/getNameMonth';


const Task = ({ monthtasks }) => {
    const date = new Date(monthtasks.date);
    const tasks = monthtasks.tasks;
    console.log(getNameMonth(date));

    return (
        <div className='flex justify-between gap-2 border rounded  p-2 mb-2 bg-gray04 '>
            <div className='bg-gray05 p-1 rounded text-center'>
                <div className='flex items-center w-auto'>
                    <span className='text-4xl'>{getNameMonth(date)}</span>
                    <span style={{ writingMode: 'vertical-lr' }} className='text-xs font-medium'>{date.getFullYear()}</span>
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



const Month = ({ tasks }) => {

    function filterTasksByMonth(tasks) {
        const today = new Date();
        const currentYear = today.getFullYear();

        const months = {
            january: { date: Date.parse(`1/1/${currentYear}`), tasks: [] },
            february: { date: Date.parse(`2/1/${currentYear}`), tasks: [] },
            march: { date: Date.parse(`3/1/${currentYear}`), tasks: [] },
            april: { date: Date.parse(`4/1/${currentYear}`), tasks: [] },
            may: { date: Date.parse(`5/1/${currentYear}`), tasks: [] },
            june: { date: Date.parse(`6/1/${currentYear}`), tasks: [] },
            july: { date: Date.parse(`7/1/${currentYear}`), tasks: [] },
            august: { date: Date.parse(`8/1/${currentYear}`), tasks: [] },
            september: { date: Date.parse(`9/1/${currentYear}`), tasks: [] },
            october: { date: Date.parse(`10/1/${currentYear}`), tasks: [] },
            november: { date: Date.parse(`11/1/${currentYear}`), tasks: [] },
            december: { date: Date.parse(`12/1/${currentYear}`), tasks: [] }
        }

        tasks.forEach(task => {
            const taskDate = new Date(task.date);
            const month = taskDate.getMonth();
            const year = taskDate.getFullYear();

            if (month === 0 && year === currentYear) {
                months.january.tasks.push(task);
            } else if (month === 1 && year === currentYear) {
                months.february.tasks.push(task);
            }
            else if (month === 2 && year === currentYear) {
                months.march.tasks.push(task);
            }
            else if (month === 3 && year === currentYear) {
                months.april.tasks.push(task);
            }
            else if (month === 4 && year === currentYear) {
                months.may.tasks.push(task);
            }
            else if (month === 5 && year === currentYear) {
                months.june.tasks.push(task);
            }
            else if (month === 6 && year === currentYear) {
                months.july.tasks.push(task);
            }
            else if (month === 7 && year === currentYear) {
                months.august.tasks.push(task);
            }
            else if (month === 8 && year === currentYear) {
                months.september.tasks.push(task);
            }
            else if (month === 9 && year === currentYear) {
                months.october.tasks.push(task);
            }
            else if (month === 10 && year === currentYear) {
                months.november.tasks.push(task);
            }
            else if (month === 11 && year === currentYear) {
                months.december.tasks.push(task);
            }
        });
        return months;
    }
    const tasksfilters = filterTasksByMonth(tasks);
    console.log(tasksfilters);

    return (
        <section className='max-w-[450px] m-auto px-4 pb-7'>
            {
                Object.keys(tasksfilters).map((month, index) => <Task key={index} monthtasks={tasksfilters[month]} />)
            }
        </section>
    )
}

export default Month