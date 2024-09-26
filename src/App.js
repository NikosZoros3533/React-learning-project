import './index.css';
import React,{useState} from 'react'

import Employees from './pages/Employees'
import Header from './components/Header';


function App() {



  return (
    <>
      <Header>
        <Employees />
      </Header>


      
    </>
);
}

export default App; 
