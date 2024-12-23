import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function CreateTask() {

   const[userData,setUserData] =   useContext(AuthContext);

   const[taskTitle, setTaskTitle] = useState('')
   const[taskDescription,setTaskDescription]  = useState('')
   const[taskDate, setTaskDate] = useState('')
   const[asignTo, setAsignTo] = useState('')
   const[category, setcategory] = useState('')

   const[newTask,setnewTask] = useState({})

     const submitHandler = (e)=>{
      e.preventDefault()

     setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
     
     // const data  =  JSON.parse(localStorage.getItem('employees'))
     const data =  userData
     
     data.forEach((elem)=>{
          if(asignTo == elem.firstname){
               elem.tasks.push(newTask)
               console.log(elem)
          } 
     })
     setUserData(data)

     console.log(data)

     // setUserData(data)

     localStorage.setItem('employees',JSON.stringify(data))

     setTaskTitle("")
     setTaskDescription("")
     setTaskDate("")
     setcategory("")
     setAsignTo("")
     setTaskDate("")

     // console.log(data)
     //console.log(Task)
     // setTaskTitle("")
     // setTaskDescription("")
     // setTaskDate("")
     // setAsignTo("")
     // setcategory("")


//     console.log(taskTitle,taskDescription,taskDate,asignTo,category)
  }

  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
    <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full  items-start justify-between'>
        <div className='w-1/2'>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input value={taskTitle} onChange={(e)=>{
             return setTaskTitle(e.target.value)
        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a Ui Design' />
        </div>
        <div>
       <h3  className='text-sm text-gray-300 mb-0.5'>Date</h3>
       <input value={taskDate} onChange={(e)=>{
             return setTaskDate(e.target.value)
        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
       </div>

       <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
       <input value={asignTo} onChange={(e)=>{
             return setAsignTo(e.target.value)
        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
       </div>

       <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
       <input value={category} onChange={(e)=>{
             return setcategory(e.target.value)
        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design, Dev etc' />
       </div>
        </div>
        



        <div className='w-2/5 flex flex-col items-start'>
       <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
       <textarea value={taskDescription} onChange={(e)=>{
             return setTaskDescription(e.target.value)
        }}    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' name="" id="" cols="30" rows="10"></textarea>
       <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
       </div>

    </form>
</div>
  )
}

export default CreateTask