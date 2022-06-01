import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Style/Dashboard.css'
import {  Routes,Route  } from 'react-router-dom'
import AddScreen from './AddScreen'
import logo from "../IMAGES/logo.png"
import { db } from '../firebase'
export const Dashboard = () => {
  const [user,setUser] = useState({});
    useEffect(()=>{
        db.child("contacts").on("value",(snapshot)=>{
            setUser({
                ...snapshot.val(),
            })
            // if(snapshot.val() !== null){
            //     setUser({
            //         ...snapshot.val(),
            //     })
            // }else{
            //     snapshot({});
            // }
        })
    },[]);
  return (
    <div className='dashboard_cover'>
        <div className='addbutton_cover'>
            <Link to="AddScreen">
            <button className='button_Add'>
                <h3 className='button_text'>Add New</h3>
            </button>
            </Link>
            </div>
            <div className='search'>
                <div className='search_icon'><i className='fab fa-facebook-f'></i></div>
            <input type="text" className='search_input'/>
            </div>
            <div className='users_container'>
              
            <div className='users'>
            <img src={logo} className="profile_pic"/>
            </div>
          
            </div>
            
   
   
  
   
    </div>
  )
}
