import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
  
 const[user,setUser] =  useState(null);

 const[loggedInUserData,setloggedInUserData] = useState(null)
//  console.log(loggedInUserData)

 const [userData,setUserData] =  useContext(AuthContext)
  // console.log(authData.employees)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      // console.log(userData)
       setUser(userData.role) 
       setloggedInUserData(userData.data)
    }
  },[])


 const handleLogin = (email,password)=>{

  if(email == `admin@me.com` && password == '123'){
   setUser("admin")
   localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(userData){
      const employee =  userData.find((e)=>{return e.email == email && e.password == password})
      if(employee){
        setUser("Employee")
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
  }
  else{
    alert("Invalid Credentials")
  }   
 }

//  handleLogin('user@me.com',123); 

  return (
    <div className='w-full h-screen bg-[#1F1E24] text-white'>
      {!user? <Login handleLogin = {handleLogin} /> :""}

      {user == 'admin'? <AdminDashboard changeUser = {setUser}/> :(user == 'Employee')?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null}

      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/>*/}
    </div>
  )
}

export default App