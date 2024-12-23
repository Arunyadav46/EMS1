import React from 'react'

import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import Accepttask from "./Accepttask"



function Tasklist({data}) {
    // console.log(data)
  return (
    <div id="tasklist" className='w-full h-[55%]  mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>

        {data.tasks.map((elem,idx)=>{
          if(elem.active==true){
            return <Accepttask key={idx} data={elem}/>
          }

          if(elem.newTask==true){
            return <NewTask key={idx} data = {elem}/>
          }
          if(elem.completed==true){
            return <CompleteTask key={idx} data = {elem}/>
          } 
          if(elem.failed===true){
            return <FailedTask key={idx} data = {elem}/>
          }
      
        })}

        

    </div>
  )
}
export default Tasklist