import { StyledButton } from '../assets/styles';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Ver() {

  const {idcontato} = useParams();
  console.log('ID do Contato:', idcontato);
  
  const [contatos, setContatos] = useState({
    nome: "",
    idade: 0,
    descricao: "",
    foto: ""
  });

  const fetchContatoDetails = async() => {

    try{
      const response = await fetch(`http://localhost:8080/contatos/buscarId/${idcontato}`);
      const result  = await response.json();
      console.log('Result:', result);
      setContatos(result);
      
      
    }catch (error) {
      console.log('Error ao buscar contato no banco: ', error);
    }
  };

  useEffect( () => {
    fetchContatoDetails();
  }, [idcontato]);





  return (
    <div className="container">
      <div className="dados">
        <div className="apresentation">
          <div className="main-data">
            <img src={contatos.foto} alt={contatos.nome} />
          </div>
          <div className="main-data">
            <ul>
              <li>NOME: {contatos.nome} </li>
              <li>IDADE: {contatos.idade}  </li>
              <li>DESCRIÇÃO: <p>
                {contatos.descricao}
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