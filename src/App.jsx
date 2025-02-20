import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import LoginComponent from './LoginComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className='sleeping'>Welcome to Anushka's react app ;) </h1>
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <FunctionalComponent/>
      <LoginComponent/>
    </div>
  );
}

export default App;
