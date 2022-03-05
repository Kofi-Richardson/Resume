
import './App.css';
import React from 'react'
import Header from './Components/Header'
import Greetings from './Components/Greetings';
import Footer from './Components/Footer'

export default function App() {
  return (
   <div className='appBody'>
      <Header/>
     <div className='appContent'>
        <Greetings/>
     </div>
     <Footer/>
   </div>
  );
}


