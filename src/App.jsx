import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <div className='App'>
      <TopNav />
      <Feed />
    </div>
  );
}

export default App;
