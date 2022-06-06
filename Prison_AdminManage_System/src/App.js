import logo from './logo.svg';
import './App.css';
import SideNaveBar from './component/SideNaveBar';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import AddScreen from './component/AddScreen';

import WelcomScreen from './component/WelcomScreen';
import { Dashboard } from './component/Dashboard';
import Home from './component/home';
import Account from './component/Account';
import Visits from './component/Visits';
import Interveiws from './component/Interveiws';
import Viewuser from './component/Viewuser';
function App() {
  return (
  <BrowserRouter>
   
   <Routes>
   <Route  path="login" element={<WelcomScreen/>} />
   
     
     <Route  path="/" element={<SideNaveBar/>}>
    <Route path='account' element={<Account/>}/>
    <Route  path='dashboard/*' element={<Home/>}/>
    <Route path='visits' element={<Visits/>}/>
    <Route path='interviews' element={<Interveiws/>}/>
   
    </Route>
     </Routes>
  
   </BrowserRouter>
  );
}

export default App;
