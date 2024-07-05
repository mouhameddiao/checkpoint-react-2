
// src/App.js
import React from 'react';
import PlayersList from './PlayersList';


const appStyle = {
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: '#121212',
  color: '#ffffff',
  minHeight: '100vh',
  padding: '2rem'
};

function App() {
  return (
    <div style={appStyle}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
