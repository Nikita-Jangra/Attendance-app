import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header.jsx'
import AllRoutes from './AllRoutes.jsx'
function App() {
  return (
    <Router>
      <div className='app'>
       <Header/>
       <AllRoutes/>
      </div>
   </Router>
  );
}

export default App;
