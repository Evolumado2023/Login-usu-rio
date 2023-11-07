import Table from 'react-bootstrap/Table';
import { StyledButton } from '../assets/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function View() {
  const white = { color: "#fff"};
  const m = { marginTop: "2em"}
  const icontStyle = {color: "rgb(238, 36, 228)", fontSize: "20pt", marginLeft: "25px"};

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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@Foto</td>
              <td>
                <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px' }}/>
                <FontAwesomeIcon icon={faPencil} style={{ marginRight: '10px' }}/>
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@foto</td>
              <td>

                <Link to="/ver">
                  <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px' }} />
                </Link>

                <Link to="/editar">
                  <FontAwesomeIcon icon={faPencil} style={{ marginRight: '10px' }} />
                </Link>

                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>

          </tbody>

        </Table>
          <Link to="/ver">
            <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
          </Link>
      </div>
    </div>
  );
}

export default View;