import React from 'react'
import { BrowserRouter , Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Thirdpartyapi from './components/Thirdpartyapi'
import Gethookapi from './components/Getbookapi'
import Footer from './components/Footer'
import Allproduct from './components/Allproduct'
import Randomuser from './components/Randomuser'
import Userinput from './components/Userinput'

export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/all-users' element={<Thirdpartyapi/>} />
      <Route path='/all-product' element={<Gethookapi/>} />
      <Route path='/randomuser' element={<Gethookapi/>} />
      <Route path='/Userinput' element={<Userinput/>} />
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
