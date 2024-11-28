
import { Link } from 'react-router-dom'
import Card from '../Cards/Card.jsx'
import './Cardapio.css'
export default function Cardapio() {

    return (

        <div>
            <div>
             <div className='botaoNewCad'>
                <Link to="/Cadastro">
                  
                  <button>Novo Cadastro</button>
                
                </Link>
               </div>
                <div className='pesquisa'>
                    <input className='buscar' placeholder='Pesquisar' type="text"></input>
                    <button><span className='botaoBusca'><i class="bi bi-search" style={{ color: 'white' }}></i></span></button>
                    <div className='cartoes'>
                        <Card nome="Hamburger" valor="$17,99" img="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg"/> 
                        <Card nome="Hot-dog" valor="$7,99" img="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg" />
                        <Card nome="Pizza" valor="$25,99" img="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg" />
                        <Card nome="Pastel" valor="$18,99" img="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg" />
                    </div>
                </div>
            </div>
        </div>
        
         
    )


}