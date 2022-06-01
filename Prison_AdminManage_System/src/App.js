import logo from './logo.svg';
import './App.css';
import SideNaveBar from './component/SideNaveBar';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import AddScreen from './component/AddScreen';

import WelcomScreen from './component/WelcomScreen';
import { Dashboard } from './component/Dashboard';
import Home from './component/home';
import Account from './component/Account';
function App() {
  return (
  <BrowserRouter>
   
   <Routes>
   <Route  path="login" element={<WelcomScreen/>} />
   
     
     <Route  path="/" element={<SideNaveBar/>}>
    <Route path='account' element={<Account/>}/>
    <Route  path='dashboard/*' element={<Home/>}/>
    
   
    </Route>
     </Routes>
  
   </BrowserRouter>
  );
}

export default App;
