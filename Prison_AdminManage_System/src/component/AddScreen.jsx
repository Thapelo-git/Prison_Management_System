import React,{useState,useEffect} from 'react'
import '../Style/AddScreen.css'
import { auth,db } from '../firebase'
import { storage } from '../firebase'
import {  useNavigate } from 'react-router-dom'
function AddScreen() {
  let navigate =useNavigate()
  const values={
    name:'',surname:'',age:'',IDnumber:'',
    familyname:'',familysurname:'',familyphonenumber:'',familyemail:'',
    // lawyername:'',lawyersurname:'',lawyerphonenumber:'',lawyeremail:''
  }

  const [url, setUrl] = useState();
  const [image,setImage]=useState(null)
  const handleImgChange=e=>{
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  }
  const [progress, setProgress] = useState(0);
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
      ;
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };
  const [initialState,setState]=useState(values)
  const {name,surname,age,IDnumber,familyname,familysurname,
  familyphonenumber,familyemail
  // ,lawyername,lawyersurname,lawyerphonenumber,lawyeremail
}=initialState

  const handleInputChange=(e)=>{
    let {name,value}=e.target;
    setState({
      ...initialState,
      [name]:value,
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    
        db.ref('Puser').push({name,surname,age,IDnumber,familyname,familysurname,
          familyphonenumber,familyemail,url})
       navigate('dashboad')
}
  return (
    <>
    <div className='Add_cover'>
      <div className='headings'>
        <h3>Upload Information</h3>
      </div>
      <div className='img_row'>
        
      <img src={url || "https://media.istockphoto.com/vectors/welcome-hotel-services-on-vector-illustration-vector-id1172931964?k=20&m=1172931964&s=612x612&w=0&h=n8tpGi16ZTNU1quhN-GjONLcgVe6xgzJ2-QaD4_MVU4="} 
      alt="firebase-image" className='image1'/>
      </div>
      <div className='img_row'>
      <input name="url" onChange={handleImgChange} style={{width:'50%'}} type="file" class="form-control"
      placeholder={url} />
              <button className="btn-success" onClick={handleUpload}>Upload</button>
              <progress value={progress} max="1000" />
              </div>
      {/* <div className='img_cover'>
   
      </div> */}
      <div className='form_cover'>
      <form onSubmit={handleSubmit}>
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
       

      {/* <div className='headings'>
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
        </div> */}
        <div className='headings'>
          <button type='submit' className='button'><label className='button_Lable'>Submit</label></button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default AddScreen