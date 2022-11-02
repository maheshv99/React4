import React, { Component } from 'react';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import About from "./component/about";
import Home from "./component/home";
import Contact from "./component/contact";
import "./style.css";



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div className='navigationbar'>
            <Link to="/" className='hello'>Home</Link><br/>
            <Link to="/students" className='hello'>Students</Link><br/>
            <Link to="/contact" className='hello'>Contact US</Link>
         </div>
       
        

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/students' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
