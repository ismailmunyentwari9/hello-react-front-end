import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './components/api';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Greetings} />
      </Routes>
    </Router>
  );
}

export default App;
