import './App.css';
import Tree from './components/Tree.js';
import Intro from './components/Intro.js';
import Links from './components/Links.js';

function App() {
  return (
    <div className="App">
      <div><Tree /></div>
      <div><Intro /></div>
      <div><Links /></div>
    </div>
  );
}

export default App;
