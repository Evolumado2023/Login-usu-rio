import { StyledButton } from '../assets/styles';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import verContato from '../assets/js/crud/verContato';

function Ver() {

  const { idcontato } = useParams();
  console.log('ID do Contato:', idcontato);
  const contato = verContato(idcontato);


  return (
    <div className="container">
      <div className="dados">
        <div className="apresentation">
          <div className="main-data">
            <img src={contato.foto} alt={contato.nome} />
          </div>
          <div className="main-data">
            <ul>
              <li><span>NOME:</span> {contato.nome} </li>
              <li><span>IDADE:</span> {contato.idade}  </li>
              <li><span>IDADE:</span> <p>
                {contato.descricao}
              </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Link to="/view">
        <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
      </Link>
    </div>
  );
}

export default Ver;