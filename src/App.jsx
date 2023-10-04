import { useState } from 'react'
import Navbar from './navbar/Navbar'
import Contents from './contents/Contents'
import './App.css'
import axios from 'axios';

import { store } from './store'
import { Provider } from 'react-redux'
function App() {
 axios.defaults.withCredentials = true
  return (
    <>
    <Provider store={store}>
      <div className='app'>
        
        <div className='inside-app'>
          <Navbar />
          <Contents />
        </div>
       
       
      </div>
      </Provider>
    </>
  )
}

export default App
