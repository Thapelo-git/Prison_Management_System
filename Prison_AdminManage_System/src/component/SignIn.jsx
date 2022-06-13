import React,{useRef,useState} from 'react'
import '../Style/SignIn.css'

import { useAuth } from './contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
function SignIn() {
  const emailRef=useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    
  const [error,setError]=useState('')
  const navigate =useNavigate()
  const  handleSubmit = async (e)=>{
    e.preventDefault()
    
    try{
      setError('')
      
      await login(emailRef.current.value,passwordRef.current.value)
      .then( res=>{
        try {
            
              localStorage.setItem("AdminPuser", res.user.uid)
          } catch (e) {
            // saving error
            console.log('no data')
          }
      })
      
      navigate('/')
    } catch{
      setError('failed to sign in check Email/Password')
    }
  
  }
  return (
    <div>
      <form>
        <div className='header'>
          <h3>SignIn</h3>
        </div>
        <div className='form_innerCon'>
      <table>
        <td><th><label>Email</label></th>
        <input placeholder='Enter Email' type='email' className='Signinput'>
        </input>
        </td>
        <td><th><label>Password</label></th>
        <input placeholder='Enter Password' type='password' className='Signinput'>
        </input>
        </td>
        
      </table>
      <div className='button_container'>
        <button className='button' onClick={handleSubmit}><h4 className='button_Lable'>Login</h4></button></div>
      <div className='forgetPassword_container'><p className='forgetPassword'>ForgetPassword</p></div>
      </div>
      </form>
    </div>
  )
}

export default SignIn