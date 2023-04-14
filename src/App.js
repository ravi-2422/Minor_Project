import logo from './logo.svg';
import './App.css';
import './sidebar.css';
import './tsidebar.css';
import './gp.css';
import './acp.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {About} from './components/about'
import {Login} from './components/login'
import {Vichla} from './components/vichla'
import {Signup} from './components/signup'
import {Temp} from './components/temp'
import {Complains} from './components/complains'
import {Attendance} from './components/attendance'
// import {Scanner} from './components/scanner'
import {Side} from './components/sidebar'
import { Tsidebar } from './components/tsidebar';
import {HandleClick} from './components/tsidebar'

function App() {
  

  let number=1;
  return (
    <div className="App">

  <Router>
    <div className='d-flex justify-content-center'>


            <Tsidebar/>
            {/* <Scanner/> */}

            <div className='appkiauto' style={{overflow:"auto"}}>
          <button className="colbtn btn btn-success" onClick={event => HandleClick(event,`${parseInt(number)}` )}>Col</button>

      <Routes>
     
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/vichla" element={<Vichla/>}/>
      <Route exact path="/complains" element={<Complains/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/temp" element={<Temp/>}/>
      <Route path="/attendance" element={<Attendance/>}/>
    </Routes>
      </div>
          </div>
          
          
        
        </Router>


    </div>
  );
}

export default App;
