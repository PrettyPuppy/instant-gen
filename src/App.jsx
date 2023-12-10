import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import ResultView from './views/ResultView'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import { TypeContext } from './contexts/TypeContext'
import { useState } from 'react'

function App() {

  const [type, setType] = useState('review');

  return (
    <BrowserRouter>
      <TypeContext.Provider value={{ type, setType }}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' index element={<HomeView />} />
            <Route path='/result' element={<ResultView />} />
          </Route>
        </Routes>
      </TypeContext.Provider>
    </BrowserRouter>
  )
}

export default App
