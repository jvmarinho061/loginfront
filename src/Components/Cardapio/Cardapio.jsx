import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card.jsx';
import axios from 'axios';
import './Cardapio.css';

export default function Cardapio() {
    const [comidas, setComidas] = useState([]);

    const url = 'http://localhost:8080/comida';

    // Busca os dados ao carregar o componente
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setComidas(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    // Função para remover o item deletado da lista
    const handleDelete = (id) => {
        setComidas((prevComidas) => prevComidas.filter((comida) => comida.id !== id));
    };

    return (
        <div>
            <div className='botaoNewCad'>
                <Link to='/Adicionar'>
                    <button>Novo Cadastro</button>
                </Link>
            </div>
            <div className='pesquisa'>
                <input className='buscar' placeholder='Pesquisar' type='text'></input>
                <button>
                    <span className='botaoBusca'>
                        <i className='bi bi-search' style={{ color: 'white' }}></i>
                    </span>
                </button>
                <div className='cartoes'>
                    {comidas.map((comida) => (
                        <Card
                            key={comida.id}
                            id={comida.id}
                            nome={comida.nome}
                            valor={comida.valor}
                            img={comida.imgUrl}
                            estrelas={comida.estrelas}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
