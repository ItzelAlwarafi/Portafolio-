import { useState } from 'react'
import DigitalCV from './components/DigitalCV'
import MenuBar from './components/MenuBar'
import Projects from './components/Projects'
import './App.css'

function App() {
  
  return (
    <>
    <div className='PageContent'>
      
         <div className='leftAside'>
             <DigitalCV/>
           </div>
           <div className=' menulinks'>
           <h1 className='circlelinks' href=""></h1> 
           <h1 className='circlelinks' href=""></h1>
           <h1 className='circlelinks' href=""></h1>
           </div>
          
       <div className='Main'>
      <img className='mainPic'  src='src/images/mainCityPic.png'/>

      <div className='achivments'>
      <h2 className='achivmentsRsults'>  25 +</h2>
      <h2 className='achivment'>  Projects</h2>
      <h2 className='achivmentsRsults'>  10 +</h2>
      <h2 className='achivment'>  Projects</h2>
      <h2 className='achivmentsRsults'>  5 +</h2>
      <h2 className='achivment'>  Projects</h2>
      <h2 className='achivmentsRsults'>  5 +</h2>
      <h2 className='achivment'>  Projects</h2>
      

</div>
         <div className='projects'>
          <Projects/>
          </div>

      


        </div>

             <div className='MenuSide'>
                 <MenuBar/>
             </div>
    
     </div>
    </>
  )
}

export default App
