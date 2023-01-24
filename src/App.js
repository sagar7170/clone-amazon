import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './Components/Stateprovider';
import Payment from './Components/Payment';
import Orders from './Components/Orders';
import { Sliderimg } from './Components/Sliderimg';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log('the user is >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <>
            <Header />
            <Home slides={Sliderimg}/>
          </>
        } />
        <Route path="/checkout" element={
          <>
            <Header />
            <Checkout />
          </>
        } />
        <Route path="/payment" element={
          <>
            <Header />
            <Payment />
          </>
        } />
        <Route path="/orders" element={
          <>
            <Header />
            <Orders/>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
