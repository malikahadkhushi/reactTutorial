import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Headers from './components/Headers';
import Protected from './Pages/Protected';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/home' element={<Protected Comp={Home} />} />
        <Route path='/about' element={<Protected Comp={About} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App