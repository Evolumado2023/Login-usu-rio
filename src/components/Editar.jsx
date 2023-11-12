import Button from 'react-bootstrap/Button';
import { StyledButton } from '../assets/styles'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect } from 'react';
import { Link, json, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




function Editar() {

  const item = { display: "flex", gap :"2em", color: "rgb(238, 36, 228)"}
  const liStyle = { color: '#fff', fontSize: "18pt", listStyle: "none"}
  const h1Style = { color: '#FFF'};
  const i = { color: "rgb(238, 36, 228)" }
  const a = { color: "#FFF", textDecoration: "none" }
  
  const navigate = useNavigate();

  const [exibirMensagem, setExibirMensagem] = useState(false);

  const { idcontato} = useParams();
  const [contato, setContato] = useState({
    nome: '',
    idade: 0,
    descricao: '',
    foto: ''
  });

  // essa lógica é a mesma do Ver.jsx
  useEffect(() => {
    const fetchContatoDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/contatos/buscarId/${idcontato}`);
        const result = await response.json();
        setContato(result);
      } catch (error) {
        console.log('Erro ao buscar contato no banco: ', error);
      }
    };

    fetchContatoDetails();
  }, [idcontato]);


  const handleEditar = async(e) => {
    e.preventDefault();

    try{
       
      const response = await fetch(`http://localhost:8080/contatos/editar/${idcontato}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(contato)
      });
      if (response.ok) {
        // Atualizar o estado ou redirecionar para a página de visualização
        // Exemplo de atualização do estado:
         const responseBody = await response.text();
         
      // Verificar se a resposta não está vazia
      if (responseBody) {
        const updatedContato = JSON.parse(responseBody);
        setContato(updatedContato);
        setExibirMensagem(true);

        // Redirecionar automaticamente após 2 segundos
        navigate('/view');
      } else {
        console.log('Erro: resposta vazia');
      }
     
      } else {
        console.log('Erro ao editar contato:', response.statusText);
      }


    } catch(error) {
      console.log('Erro ao editar contato:', error)
    }

    
  };


  return (
    <div className='container'>
      <header>
        <div className="container-header">
          <div className="title">
            <h1 style={h1Style}>Editar Contato</h1>
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
      <Form onSubmit={(e) => handleEditar(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" 
                      placeholder="Enter nome" 
                      name="nome"
                      value={contato.nome}
                      onChange={(e) => setContato({...contato, nome: e.target.value})}
        />



      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Idade</Form.Label>
        <Form.Control type="number" 
                      placeholder="Idade" 
                      name="idade"
                      value={contato.idade}
                      onChange={(e) => setContato({...contato, idade: e.target.value})}    
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" 
                      placeholder="Descrição" 
                      name="descricao"    
                      value={contato.descricao}
                      onChange={(e) => setContato({...contato, descricao: e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file" // Usando <input type="file> para fazer upload da foto
            name="foto"
            //value={contato.foto}
            onChange={(e) => setContato({...contato, foto: e.target.files[0]})}
          />
      </Form.Group>
      <Button variant="primary" type="submit">
        Editar Contato
      </Button>

    </Form>

    <Link to="/view">
        <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
    </Link>

    </div>
  );
}

export default Editar;