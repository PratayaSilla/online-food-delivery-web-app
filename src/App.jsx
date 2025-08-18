import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignInPage from './Pages/AuthPage/SignInPage';
import SignUpPage from './Pages/AuthPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";


function App() {
  return (
    <Routes> 
      <Route path='/' element={ <LandingPage /> } />
      <Route path='/signin' element={ <SignInPage /> } />
      <Route path='/signup' element={ <SignUpPage /> } />
      <Route path='/home' element={ <HomePage/> } />
      <Route path="/restaurant/:id" element={ <RestaurantPage /> } />
    </Routes>
  );
}

export default App;