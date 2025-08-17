import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignInPage from './Pages/AuthPage/SignInPage';
import SignUpPage from './Pages/AuthPage/SignUpPage';


function App() {
  return (
    <Routes> 
      <Route path='/' element={<LandingPage />} />
      <Route path='/signin' element={ <SignInPage /> } />
      <Route path='/signup' element={ <SignUpPage /> } />

    </Routes>
  );
}

export default App;