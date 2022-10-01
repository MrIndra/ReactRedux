import React, { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import  { NavbarView } from './common/helpers/navbar/NavbarView'
import { Routes, Route} from 'react-router-dom'

const UserView = React.lazy(() => import('./features/user/UserView'))

function App() {
  return (
    <div className="App">
        <NavbarView/>
        <Routes>
          <Route path='/' 
            element=
            {<div className='custom'>
                <CakeView/>
                <IcecreamView/>
              </div>
            }/>
          <Route path='/external' element=
          {
            <div className='custom'>
               <Suspense fallback={<div>Loading demo page...</div>}>
                  <UserView/>
              </Suspense>
            </div>
          }/>
        </Routes>
        
     
    </div>
  )
}

export default App
