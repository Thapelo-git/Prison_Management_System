import React,{useState,useEffect} from 'react'
import '../Style/AddScreen.css'

function AddScreen() {
  const values={
    name:'',surname:'',age:'',IDnumber:'',
    familyname:'',familysurname:'',familyphonenumber:'',familyemail:'',
    lawyername:'',lawyersurname:'',lawyerphonenumber:'',lawyeremail:''
  }
  const [initialState,setState]=useState(values)
  const {name,surname,age,IDnumber,familyname,familysurname,
  familyphonenumber,familyemail,lawyername,lawyersurname,lawyerphonenumber,lawyeremail}=initialState

  const handleInputChange=(e)=>{
    let {name,value}=e.target;
    setState({
      ...initialState,
      [name]:value,
    })
  }
  return (
    <div className='cover'>
      <div className='headings'>
        <h3>Upload Information</h3>
      </div>
      <div className='img_cover'>

      </div>
      <div className='form_cover'>
      <form>
        <div className='input_row'>
          <div className='input_column'>
            <label>Name</label>
            <input name='name' type='text' className='input_infor' required="required" 
            onChange={handleInputChange} value={name}/>
          </div>
          <div className='input_column'>
            <label>Surname</label>
            <input name='surname' type='text' className='input_infor' required="required"
            onChange={handleInputChange} value={surname}/>
          </div>
          <div className='input_column'>
            <label>Age</label>
            <input name='age' type='number' className='input_infor' required="required"
            onChange={handleInputChange} value={age}/>
          </div>
          <div className='input_column'>
            <label>ID Number</label>
            <input name='IDnumber' type='text' className='input_infor' required="required" 
            onChange={handleInputChange} value={IDnumber}/>
          </div>
        </div>
      
        <div className='headings'>
        <h3>Family Information</h3>
      </div>
      <div className='input_row'>
          <div className='input_column'>
            <label>Name</label>
            <input name='familyname' type='text' className='input_infor' required="required"
            onChange={handleInputChange} value={familyname} />
          </div>
          <div className='input_column'>
            <label>Surname</label>
            <input name='familysurname' type='text' className='input_infor' required="required" 
            onChange={handleInputChange} value={familysurname} />
          </div>
          <div className='input_column'>
            <label>Phone Number</label>
            <input name='familyphonenumber' type='number' className='input_infor' required="required" 
            onChange={handleInputChange} value={familyphonenumber} />
          </div>
          <div className='input_column'>
            <label>Email</label>
            <input name='familyemail' type='text' className='input_infor' required="required" 
            onChange={handleInputChange} value={familyemail}/>
          </div>
        </div>
       

      <div className='headings'>
        <h3>Lawyer Information</h3>
      </div>
      <div className='input_row'>
          <div className='input_column'>
            <label>Name</label>
            <input name='lawyername' type='text' className='input_infor' required="required"
            onChange={handleInputChange} value={lawyername}/>
          </div>
          <div className='input_column'>
            <label>Surname</label>
            <input name='lawyersurname' type='text' className='input_infor' required="required" 
            onChange={handleInputChange} value={lawyersurname}/>
          </div>
          <div className='input_column'>
            <label>Phone Number</label>
            <input name='lawyerphonenumber' type='number' className='input_infor' required="required"
            onChange={handleInputChange} value={lawyerphonenumber}/>
          </div>
          <div className='input_column'>
            <label>Email</label>
            <input name='lawyeremail' type='text' className='input_infor' required="required"
            onChange={handleInputChange} value={lawyeremail}/>
          </div>
        </div>
        <div className='headings'>
          <button type='submit' className='button'><label className='button_Lable'>Submit</label></button>
        </div>
      </form>
      </div>
    </div>
    
  )
}

export default AddScreen