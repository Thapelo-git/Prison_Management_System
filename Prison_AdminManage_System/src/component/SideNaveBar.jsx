import React from 'react'
import "../Style/SideNaveBar.css"
import logo from "../IMAGES/logo.png"
import { Link, Outlet } from 'react-router-dom'
function SideNaveBar() {
  return (
    <div className='nav-main-container'>
        <div className='inner-container'>
    <img src={logo} className="logo"/>
    <div className='nav-list'>
        <nav>
    

        <ul className='SidebarList'>
            <li className='row'>
                 
                    <div className='nav-icon'>
                    <i className='fab fa-facebook-f'></i>
                    </div>
                    <div className='title'>
                    
                    <Link to="dashboard"><a>Dashboard</a></Link>
                    
                
                
                </div>
                   
            </li>
            <li className='row'
            href='/home'>
                 
                    <div className='nav-icon'>
                    <i className='fab fa-facebook-f'></i>
                    </div>
                    <div className='title'>
                    <Link to="visits"><a>Visits</a></Link>
                </div>
                   
            </li>
            <li className='row'>
                 
                    <div className='nav-icon'>
                    <i className='fab fa-facebook-f'></i>
                    </div>
                    
                    <div className='title'>
                    <Link to="account" >
                    <a >
                   Account
                </a>
                </Link>
                </div>
                  
            </li>
            <li className='row'>
                  
                    <div className='nav-icon'>
                    <i className='fab fa-facebook-f'></i>
                    </div>
                    <div className='title'>
                    <a >
                    Dashbout
                    {/* <Link to="/">Dashboard</Link> */}
                    
                </a>
                </div>
                   
            </li>
        </ul>
  
    </nav>
    {/* <hr/> */}
    
    
    </div>
    
    <div className='loguot-btn'>
    <button className='btn'>
    <Link to="login"><a>Logout</a></Link>
        
    </button>
    </div>
        </div>
        <div className='inner_Container'>
    <Outlet/>
    </div>
    </div>
  )
}

export default SideNaveBar