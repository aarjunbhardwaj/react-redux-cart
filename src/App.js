import React from 'react';
import Header from './Components/Header';
import CardsDetails from './Components/CardsDetails';
import Cards from './Components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>} />
      <Route path='/cart/:id' element={<CardsDetails/>}/>
    </Routes>
    </>
  )
}

export default App