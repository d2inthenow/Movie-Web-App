
import './App.css';
import Navbar from './components/NAV';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Detail';
import Movie from './pages/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

  return (
    <div className='bg-black-400'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movie />} />
          <Route path='/moviedetails/:id' element={<Details />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
