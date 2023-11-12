import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import CriarConta from './components/CriarConta';
import RecuperaPas from './components/RecuperaPas';
import Cadastrar from './components/Cadastrar';
import View from './components/View';
import Ver from './components/Ver';
import Editar from './components/Editar';



function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route exact path='/criar-conta' Component={CriarConta} />
        <Route exact path='/recuperar-senha' Component={RecuperaPas} />
        <Route exact path='/cadastro' Component={Cadastrar} />
        <Route exact path='/view' Component={View} />
        <Route exact path='/ver/:idcontato' Component={Ver} />
        <Route exact path='/editar/:idcontato' Component={Editar} />
      </Routes>
    </Router>
  )
}

export default App
