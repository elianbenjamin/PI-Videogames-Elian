import './App.css';
import { Routes, Route} from 'react-router-dom'
import LandingPage from './components/landing/LandingPage';
import HomePage from './components/home/HomePage';
import DetailSmart from './components/detail/DetailSmart';
import Form from './components/form/Form';
import ErrorPage from './components/errorPage/ErrorPage';



function App() {


  return (
    <div className="App">

     <Routes>
      <Route path='*' element={<ErrorPage/>} />
      <Route path='/detail/:detailId' element={<DetailSmart  />}/>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/creategames' element={<Form /> } />
      <Route path='/' element={<LandingPage />}/>
      
     </Routes>
      
    </div>
  );
}

export default App;
