import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from './Components/Home'
import Search from './Components/Search'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>

    </div>
   
  );
}

export default App;
