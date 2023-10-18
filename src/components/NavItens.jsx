import { BiBookReader } from "react-icons/bi";
import { LiaAddressCard } from "react-icons/lia";

function NavItens() {

  return (
    <div className="container-main">
        
        <div className="container-box">
            <h2>Alunos</h2>
            <BiBookReader />
        </div>

        <div className="container-box">
            <h2>Professor</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ab possimus sapiente illo officiis atque enim, esse nihil, 
                quod debitis obcaecati consequatur dolor assumenda officia 
                reprehenderit voluptatum corporis alias sit quo?
            </p>
        </div>

        <div className="container-box">
            <h2>Funcionário</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ab possimus sapiente illo officiis atque enim, esse nihil, 
                quod debitis obcaecati consequatur dolor assumenda officia 
                reprehenderit voluptatum corporis alias sit quo?
            </p>

        </div>

        <div className="container-box">
            <h2>Fornecedor</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ab possimus sapiente illo officiis atque enim, esse nihil, 
                quod debitis obcaecati consequatur dolor assumenda officia 
                reprehenderit voluptatum corporis alias sit quo?
            </p>
        </div>

        <div className="container-box">
            <h2>Carteirinha</h2>
            <LiaAddressCard />
        </div>

        <div className="container-box">
            <h2>Produtos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ab possimus sapiente illo officiis atque enim, esse nihil, 
                quod debitis obcaecati consequatur dolor assumenda officia 
                reprehenderit voluptatum corporis alias sit quo?
            </p>
        </div>


    </div>
  );
}

export default NavItens;