import React, { createContext, useEffect, useState } from 'react'
import {getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'


export const AuthContext = createContext();

function AuthProvider(props) {
  // localStorage.clear()

 const[userData,setUserData] = useState([])

////localstorage par data set karne k liye use and  data ko get karne k liye use call function
 useEffect(()=>{
    setLocalStorage()
   const{employees} =  getLocalStorage();
   setUserData(employees)
 },[])

//console.log(userData)

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
          {props.children}
        </AuthContext.Provider>
     </div>
  )
}

export default AuthProvider