import React, { useState } from 'react'

function Login({handleLogin}) {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    // console.log(password)
    
    const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password)
        // console.log("emial is " +email)
        // console.log("password is " +password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='border-2 border-embraled-500 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                return submitHandler(e)
            }} className='flex flex-col items-center justify-center gap-3'>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='border-2 border-emerald-600 rounded-full px-3 py-1 text-xl outline-none bg-transparent text-white placeholder:text-zinc-400' type="email" placeholder='Enter your email'/>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='border-2 border-emerald-600 rounded-full px-3 py-1 text-xl outline-none bg-transparent text-white placeholder:text-zinc-400' type="password" placeholder='Enter your password' />
                <button className=' bg-emerald-600 rounded-full px-4 py-2 w-full hover:bg-emerald-400 text-xl outline-none border-none text-white placeholder:text-zinc-300 mt-3'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login