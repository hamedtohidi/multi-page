import { BrowserRouter, Routes, Route, NavLink, Navigate, HashRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Articles from './pages/Articles';



function App() {
  const [loggedIn] = useState(true)
  return (

    <div className="App">
      <HashRouter>
        <nav>
          <h1>My Articles</h1>
          {/* <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a> */}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Articles/:id' element={<Articles />} />
          <Route path='/Hamed' element={loggedIn ? <p>Hello Hamed</p> : <Navigate to='/' />} />
          <Route path='*' element={<Navigate to='/' />} />

        </Routes>
      </HashRouter>
    </div >
  );
}

export default App;
