import React from 'react'
import '../Style/Account.css'
import logo from "../IMAGES/logo.png"
function Account() {
  return (
      <>
    <div className='Account_cover' >
    <div className='img_cover'>
    <img src={logo} className="profile_pic"/>
    </div>
    <div className='Account_form'>
        <div className='Acc_column'>
            <div className='row_Accinput'>
    <div className='Acc_input'>
        <div><i class="bi bi-envelope-fill"></i></div>
    <input name='email' type='email' className='input' placeholder='example@gmail.com'/>
    </div>
    </div>
    <div className='row_Accinput'>
    <div className='Acc_input'>
        <div><i class="bi bi-telephone-fill"></i></div>
        <input name='phonenumber' type='number' className='input' placeholder='123456789'/>
    </div>
    </div>
    <div className='row_Accinput'>
    <div className='Acc_input'>
        <div><i class="bi bi-lock-fill"></i></div>
        <input name='password' type='password' className='input' placeholder='********' />
    </div>
    </div>
    <div className='row_Accinput'>
    <div className='Acc_input'>
        <div><i class="bi bi-lock-fill"></i></div>
        <input name='confirmpassword' type='password' className='input' placeholder='*******'/>
    </div>
    </div>
    
    <div className='button_cover'>
        <button className='button'><label className='button_Lable'>Update</label></button>
    </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Account