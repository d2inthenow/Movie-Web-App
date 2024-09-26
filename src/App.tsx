
import './App.css';
import Navbar from './components/NAV';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Detail';
import Movie from './pages/Movie';
const App = () => {

  return (
    <div className='bg-red-400'>
      <Navbar />
      <BrowserRouter>
        <Routes>\
          <Route index element={<Navigate to="/" />} />
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movie />} />
          <Route path='/moviedetails/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
