import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import CriarConta from './components/CriarConta';
import RecuperaPas from './components/RecuperaPas';



function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route exact path='/criar-conta' Component={CriarConta} />
        <Route exact path='/recuperar-senha' Component={RecuperaPas} />
      </Routes>
    </Router>
  )
}

export default App
