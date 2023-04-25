import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
