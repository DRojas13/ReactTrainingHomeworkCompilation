import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {
  const [name, setName] = React.useState("private!");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>Welcome, {name}</h1>
        </div>
        <div>
        <input type="text" onChange={(event) => setName(event.target.value) } />
        </div>
      </header>
    </div>
  );
}

export default App;
