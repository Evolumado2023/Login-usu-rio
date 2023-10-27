import { StyledButton } from '../assets/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Ver() {
  return (
    <div className="container">
      <div className="dados">
        <div className="apresentation">
          <div className="main-data">
            <p>Imagem</p>
          </div>
          <div className="main-data">
            <ul>
              <li>NOME: </li>
              <li>IDADE: </li>
              <li>DESCRIÇÃO: 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore adipisci porro illum eveniet quas similique cum? 
                  Blanditiis, dolor qui. Iusto voluptatum temporibus repudiandae 
                  minus autem, illum est veritatis aut facere.</p>
              </li>
            </ul>
          </div>
          {/*<div className="footer-data">
            <p>FOOTER DOS DADOS</p>
          </div>*/}
        </div>
      </div>



      <Link to="/view">
        <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
      </Link>
    </div>
  );
}

export default Ver;