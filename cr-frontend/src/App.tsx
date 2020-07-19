import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('My adas message blah blah');
  
  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj => {
        setMessage(obj.message);
      });
  },[]);
  return (
    <div className="App">
      {message}
    </div>
  );
}
export default App;
