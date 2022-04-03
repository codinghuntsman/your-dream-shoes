import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import NotFound from './components/Notfound/NotFound';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import DashBoard from './components/DashBoard/DashBoard';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='reviews' element={<Reviews />}></Route>
        <Route path='dashboard' element={<DashBoard />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
