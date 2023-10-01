import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './components/landing/LandingPage';
import HomePage from './components/home/HomePage';
import NavBar from './components/navbar/NavBar';
import DetailSmart from './components/detail/DetailSmart';





function App() {

  const location = useLocation()
  const isHome = location.pathname === '/home'

  return (
    <div className="App">

    {/*  {
      !isHome && (<NavBar />) 
     } */}
     {/* para que no se muestre mi landing  */}

     <Routes>
      <Route path='/detail/:detailId' element={<DetailSmart  />}/>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/' element={<LandingPage />}/>
      
     </Routes>
      
    </div>
  );
}

export default App;
