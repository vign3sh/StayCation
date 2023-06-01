import React from 'react';
import BottomNav from './components/BottomNav';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Room from './components/rooms/Room';
import Login from './components/user/Login';
import { useEffect, useState } from 'react';
import LoadingScreen from './loading/LoadingScreen'
const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000)
  }, [])

  return (
    <>
    {loading === false ? (
      <>
      <Loading />
      <Notification />
      <Login />
      <NavBar />
      <BottomNav />
      <Room />
      </>
      ) : (
        <LoadingScreen />
      )}
  </>
);
}
export default App;