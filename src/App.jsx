import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './pages/Home/Home';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className='App'>
      <TopNav />
      <Home />
      <BottomNav />
    </div>
  );
}

export default App;
