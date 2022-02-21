
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState("light");
  const [modey,setModey]=useState("dark");
  const [alert,setAlert]=useState(null);
  


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
}

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      setModey("light");
      document.body.style.backgroundColor=' gray'
      showAlert("Dark Mode Now","success")

   
    }
    
    
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Now","success")
      
    }

  
  }
  return (
  <>
  <Router>
  <Navbar title="Blogs" aboutme="About Us" mode={mode} modey={modey} toggleMode={toggleMode}/>
  <Alert Alerty={alert} />
 { <div className="container my-3">
 <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Home">
          <Textform heading="Enter The Text" showAlert={showAlert}/>
          </Route>
         
      </Switch>
   
     
 
  </div>}
  
 
  </Router>


  
  </>

  );
}

export default App;
