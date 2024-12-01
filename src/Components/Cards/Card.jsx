import './cards.css';
import axios from 'axios';

export default function Card({ img, nome, valor, estrelas, id, onDelete }) {
    // Método para excluir o item
    const handleDelete = async () => {
        try {
            const url = `http://localhost:8080/comida/${id}`;
            await axios.delete(url);
            alert(`Item "${nome}" excluído com sucesso!`);
            onDelete(id); // Atualiza a lista no componente pai
        } catch (error) {
            console.error('Erro ao excluir item:', error);
            alert('Erro ao excluir o item. Tente novamente.');
        }
    };

    return (
        <div className='Cartao'>
            <div>
                <h2>{nome}</h2>
            </div>
            <img width={150} src={img} alt={nome}></img>
            <div>
                <p className='valor'>{valor}</p>
                <div className='estrela'>
                    {Array.from({ length: estrelas }).map((_, index) => (
                        <span className='star' key={index}>
                            <i className='bi bi-star-fill' style={{ color: 'orange', background: 'none' }}></i>
                        </span>
                    ))}
                </div>
                <div className='excluirAndDelete'>
                    <div className='botaoEdit'>
                        <span className='edit'>
                            <i className='bi bi-pencil-square' style={{ color: 'white', background: 'none' }}></i>
                        </span>
                    </div>
                    <div className='botaoExcluir'>
                        <span className='excluir' onClick={handleDelete}>
                            <i className='bi bi-trash3' style={{ color: 'white', background: 'none' }}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
