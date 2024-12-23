import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function AllTask() {

   const [userData,setUserData]  =  useContext(AuthContext)
   // console.log(authData.employees)


  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded  '>
     
     <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
         <h2 className='w-1/5 text-lg font-medium '>Employee name</h2>
         <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
         <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
         <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
         <h5 className='w-1/5 text-lg font-medium '>Failed</h5>
      </div>


    <div className=''>
    {userData.map((e,i)=>{
         return  <div key={i} className='border-2 border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded'>
         <h2 className='w-1/5 text-lg font-medium'>{e.firstname}</h2>
         <h3 className='w-1/5 text-lg font-medium text-blue-600 '>{e.taskNumbers.newTask}</h3>
         <h5 className='w-1/5 text-lg font-medium text-yellow-300'>{e.taskNumbers.active}</h5>
         <h5 className='w-1/5 text-lg font-medium text-white'>{e.taskNumbers.completed}</h5>
         <h5 className='w-1/5 text-lg font-medium text-red-600'>{e.taskNumbers.failed}</h5>
      </div>
      })}
    </div>

      


         

         {/* <div className='bg-green-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2>Sarthak</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
         </div>
         <div className='bg-yellow-400 mb-2  py-2 px-4 flex justify-between rounded'>
            <h2>Sarthak</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
         </div>
         <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Sarthak</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
         </div>
         <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Sarthak</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
         </div>
         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Sarthak</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
         </div> */}
        
    </div>
  )
}

export default AllTask