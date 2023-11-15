import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import criarContato from '../assets/js/crud/criarContato';


function Cadastrar() {

  //const headerStyle = { backgroundColor: "rgb(134, 245, 245)"}
  //const menu = { display: "flex", justifyContent: "space-between "}
  const item = { display: "flex", gap :"2em", color: "rgb(238, 36, 228)"}
  const liStyle = { color: '#fff', fontSize: "18pt", listStyle: "none"}
  const h1Style = { color: '#FFF'};
  const i = { color: "rgb(238, 36, 228)" }
  const a = { color: "#FFF", textDecoration: "none" }

  const { nome, 
    idade, 
    descricao, 
    foto, 
    uploading, 
    setNome, 
    setIdade, 
    setDescricao, 
    setFoto, 
    handleSubmit } = criarContato();



  // variáveis que armazenam os dados que eu vou coletar dos campos inputs
  /*const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');

  const [uploading, setUploading] = useState(false);

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { nome, idade, descricao, foto };

    try{

      const response = await fetch('http://localhost:8080/contatos/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

      if (response.ok) {
        alert("Contato cadastrado como sucesso!");
        setNome('');
        setIdade('');
        setDescricao('');
        setFoto('');
      } else {
        console.error('Erro ao cadastrar contato: ', response.statusText)
      }


    } catch (error){
      console.error('Erro ao processar a solicitação: ', error.message)

    }
  }*/


  return (
    <div className='container'>
      <header>
        <div className="container-header">
          <div className="title">
            <h1 style={h1Style}>Cadastre o seu contato</h1>
          </div>
          <div style={item} className="container-itens">
            <li style={liStyle}>
              <Link to={"/view"} style={a}>Contatos</Link>
            </li>
            <li style={liStyle}>
              <div className="profile-icon">
                <FontAwesomeIcon icon={faUser} style={i}/>
              </div>
            </li>
          </div>
        </div>
      </header>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter nome" 
                        required
                        value={nome}
                        name="nome"
                        onChange={(e) => setNome(e.target.value)}
          />
  
  
  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Idade</Form.Label>
          <Form.Control type="number" 
                        placeholder="Idade" 
                        required
                        value={idade}
                        name="idade" 
                        onChange={(e) => setIdade(e.target.value)}   
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" 
                        placeholder="Descrição" 
                        value={descricao}
                        name="descricao" 
                        onChange={(e) => setDescricao(e.target.value)}   
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="file" // Usando <input type="file> para fazer upload da foto
              value={foto}
              name="foto"
              onChange={(e) => setFoto(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={uploading}>
          {uploading ? 'Cadastrando...' : 'Cadastrar Contato'}
        </Button>

    </Form>
    </div>
  );
}

export default Cadastrar;