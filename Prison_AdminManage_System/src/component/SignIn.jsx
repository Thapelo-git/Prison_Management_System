import React from 'react'
import '../Style/SignIn.css'
function SignIn() {
  return (
    <div>
      <form>
        <div className='header'>
          <h3>SignIn</h3>
        </div>
        <div className='form_innerCon'>
      <table>
        <td><th><label>Email</label></th>
        <input placeholder='Enter Email' type='email' className='input'>
        </input>
        </td>
        <td><th><label>Password</label></th>
        <input placeholder='Enter Password' type='password' className='input'>
        </input>
        </td>
        
      </table>
      <div className='button_container'>
        <button className='button'><h4 className='button_Lable'>Login</h4></button></div>
      <div className='forgetPassword_container'><p className='forgetPassword'>ForgetPassword</p></div>
      </div>
      </form>
    </div>
  )
}

export default SignIn