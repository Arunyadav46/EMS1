import React from 'react'

function TaskListNumber({data}) {
    // console.log(data)
  return (
    <div className='flex  h-[20vh] justify-between gap-5 mt-10'>
        <div className='w-[45%] px-9 py-6 bg-red-400 rounded-xl'>
            <h2 className='text-3xl mb-1'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%]  px-9 py-6 bg-blue-400 rounded-xl'>
            <h2 className='text-3xl mb-1'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 bg-green-400 rounded-xl'>
            <h2 className='text-3xl mb-1'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl mb-1'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber