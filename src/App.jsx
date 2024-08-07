import React from 'react';
import './App.css'
import Card300 from './Components/card300/Card300';
import Card450 from './Components/card450/Card450';
import Card550 from './Components/card550/Card550';
import Card1000 from './Components/card1000/Card1000';




function App() {
  return(
    <React.Fragment>
      < div className='back'>
  <div className='card card300'>
     <Card300/>
     </div>
  <div className='card card450'>
     <Card450/>
     </div>
  <div className='card card550'>
     <Card550/>
     </div>
     <div className='card card1000'>
     <Card1000/>
      </div>
      </div>

 </React.Fragment>
    );
  }
  
export default App
