import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

  console.log(mode)

  const [alert, setAlert] = useState(null);

  const showAlert = (messege,type)=>{
    setAlert({
      msg: messege,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 3000);
  };

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      showAlert('dark Mode has been enabled', 'success')
      document.body.style.backgroundColor = 'grey'
      document.title = "Deluxe Text - Dark Mode"
    }
    else{
      setMode('light');
      showAlert('Light Mode has been enabled', 'success')
      document.body.style.backgroundColor = 'white'
      document.title = "Deluxe Text - Light Mode"
    };
  }

  const toggleGreenMode = ()=>{
    if(mode === 'light'){
      setMode('green')
      showAlert('Green Mode has been enabled', 'success')
      document.body.style.backgroundColor = "green"
    }
    else{
      setMode('light')
      showAlert('Light mode has been enabled','success')
      console.log(mode)
      document.body.style.backgroundColor = 'white'
    }
  }

  //<TextForm showAlert = {showAlert}mode = {mode}/>


  return (
    <>
    <Router>
      
      <Navbar mode = {mode} toggleGreenMode = {toggleGreenMode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert}mode = {mode}/>} />
      </Routes>

      <Routes>
        <Route exact path="/about" element={<About/>} />
      </Routes>
      
    
      </Router>
    </>
  );
}

export default App;
