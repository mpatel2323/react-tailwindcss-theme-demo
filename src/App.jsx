import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sidebar from './Sidebar'
import ContentContainer from './ContentContainer'


function App() {
  return(
  <>
     <div className='flex'>
        <Sidebar />  
        <ContentContainer />

      </div>
    </>
  )
}

export default App
