import React from 'react'
import '../Style/SignIn.css'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
function SignUp() {
  const validate=Yup.object({
    email:Yup.string().email().required("Email is required"),
    phonenumber:Yup.string().required("Phone number is required")
    .matches(
/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
    confirmPassword:Yup.string().min(6).required('Confirm Password is required'),
    password:Yup.string().min(6).required('Confirm Password is required')
  })
  return (
    <div>
      <Formik
      initialValues={{
        email:'',phonenumber:'',confirmPassword:'',password:''
      }}
      validationSchema={validate}
      >
        {
          (formik)=>{
            const {
              values,handleChange,handleSubmit,handleBlur,errors,touched,
              isValid,dirty
            }=formik;
            return(
            <>
           
         
      <Form onSubmit={handleSubmit}>
        <div className='header'>
          <h3>SignUp</h3>
        </div>
        <div className='form_innerCon'>
      <table>
        <tr>
        <td><th><label>Email</label></th>
        <input placeholder='Enter Email' type='email' className='input' name='email'
        value={values.email} onChange={handleChange} onBlur={handleBlur}
        />{
          errors.email && touched.email?<span className='error'>{errors.email}</span>:null
        }
        
        
        </td>
        <td><th><label>Phonenumber</label></th>
        <input placeholder='Enter Phonenumber' type='number' className='input' name='phonenumber'
        value={values.phonenumber}  onChange={handleChange} onBlur={handleBlur}
        />
        {
          errors.phonenumber && touched.phonenumber?<span className='error'>{errors.phonenumber}</span>:null
        }
        </td>
        </tr>
        <tr>
        <td><th><label>Password</label></th>
        <input placeholder='Enter Password' type='password' className='input' name='password'
         value={values.password} onChange={handleChange} onBlur={handleBlur}/>
       {
          errors.password && touched.password?<span className='error'>{errors.password}</span>:null
        }
        </td>
        <td><th><label>ConfirmPassword</label></th>
        <input placeholder='Confirm Password' type='password' className='input' name='confirmPassword'
         value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
      {
          errors.confirmPassword && touched.confirmPassword?<span className='error'>{errors.confirmPassword}</span>:null
        }
        </td>
        </tr>
      </table>
      <div className='button_container'>
        <button type='submit' className='button'><h4 className='button_Lable'>Register</h4></button></div>
   
      </div>
      </Form>
      </>)
          }
      }
      </Formik>
    </div>
  )
}

export default SignUp