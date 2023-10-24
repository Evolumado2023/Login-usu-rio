import Table from 'react-bootstrap/Table';
import { StyledButton } from '../assets/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function View() {
  return (
    <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Descrição</th>
                <th>Img</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@Foto</td>
                <td>@ação</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@foto</td>
                <td>@ação</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td>@foto</td>
                <td>@ação</td>
              </tr>
            </tbody>

          </Table>
          <Link to="/cadastro">
            <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
          </Link>
    </div>
  );
}

export default View;