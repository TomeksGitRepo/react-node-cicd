import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names');
    setUsername(response.data);
  }
  return (
    <>
    <h1>My front end</h1>
    <h3>My name is {username} </h3>
    </>
    );
}

export default App;
