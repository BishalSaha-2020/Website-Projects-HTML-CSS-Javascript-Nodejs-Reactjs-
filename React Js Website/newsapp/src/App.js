
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";



export default class App extends Component {

  page=20
  render() {
    return (
      <>
     
        
        <Router>
          <br />
          <br />
        <LoadingBar
        color='#f11946'
        
        height={3}
        progress={200}
        loaderSpeed={1000}
        transitionTime={1000}
        waitingTime={1000}
        shadow={true}
        progress={100}
        
        
      />
       <br/>
       <br />

        <Navbar/>
       
       
        <Switch>
          <Route exact path="/"><News pagesize={20} country="in" category="general"></News></Route>
          <Route exact path="/business"><News pagesize={20} country="in" category="business"></News></Route>
          <Route exact path="/entertainment"><News pagesize={20} country="in" category="entertainment"></News></Route>
          <Route exact path="/general"><News pagesize={20} country="in" category="general" ></News>  </Route>
          <Route exact path="/health"><News pagesize={20} country="in" category="health"></News></Route>
          <Route exact path="/science"><News pagesize={20} country="in" category="science"></News></Route>
          <Route exact path="/science"><News pagesize={20} country="in" category="science"></News></Route>
          <Route exact path="/sports"><News pagesize={20} country="in" category="sports"></News></Route>
          <Route exact path="/technology"><News pagesize={20} country="in" category="technology"></News></Route>
            
          
        
        </Switch>
        
    
      </Router>
      </>
    )
  }
}
