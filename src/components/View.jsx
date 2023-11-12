import Table from 'react-bootstrap/Table';
import { StyledButton } from '../assets/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import handleExcluir from '../assets/js/handleExcluir';

function View() {
  const white = { color: "#fff"};
  const m = { marginTop: "2em"}
  const icontStyle = {color: "rgb(238, 36, 228)", fontSize: "20pt", marginLeft: "25px"};

  const [contatos, setContatos] = useState([]);

  const fetContatosFromDatabase = async () => {
    try{
      const response = await fetch('http://localhost:8080/contatos');
      const result = await response.json();

      setContatos(result);
    } catch (error) {
      console.log("erro ao buscar dados no banco: ", error);
    }
  };

  useEffect(() => {
    fetContatosFromDatabase();
  }, []);



  return (
    <div className="container">
      <div className='container-header'>
          <div className="title">
            <h1 style={white}>Lista de Contatos</h1>
          </div>
          <div>
            <div className='search'>
              <input type="text" style={{border: "none"}} placeholder='Buscar contato'/>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={icontStyle} />           
            </div>
          </div>
      </div>

      <div style={m}>
              
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Descrição</th>
              <th>Img</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td> {contato.nome} </td>
              <td> {contato.idade} </td>
              <td> {contato.descricao} </td>
              <td> {contato.foto} </td>

              <td>
                <Link  to={`/ver/${contato.idcontato}`}>
                  <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px' }} />
                </Link>

                <Link to={`/editar/${contato.idcontato}`}>
                  <FontAwesomeIcon icon={faPencil} style={{ marginRight: '10px' }} />
                </Link>

                <FontAwesomeIcon 
                  icon={faTrash}
                  onClick={() => handleExcluir(contato.idcontato, fetContatosFromDatabase)}
                    
                />
              </td>
            </tr>

            ))}

          </tbody>

        </Table>
          <Link to="/cadastro">
            <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
          </Link>
      </div>
    </div>
  );
}

export default View;