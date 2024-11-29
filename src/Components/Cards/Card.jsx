
import './cards.css'

export default function Card({img, nome, valor,}) {
    return (
        <div>


            <div className='Cartao'>
                <div>
                    <h2>{nome}</h2>
                </div>
                <img width={150} src={img}></img>
                <div>
                    <p className='valor'>{valor}</p>
                    <div className='estrela'>
                    <span className='star'><i class="bi bi-star-fill " style={{ color: 'orange', background: 'none' }}></i></span>
                        <span className='star'><i class="bi bi-star-fill " style={{ color: 'orange', background: 'none' }}></i></span>
                        <span className='star'><i class="bi bi-star-fill " style={{ color: 'orange', background: 'none' }}></i></span>
                        <span className='star'><i class="bi bi-star-fill " style={{ color: 'orange', background: 'none' }}></i></span>
                    </div>
                    <div className='excluirAndDelete'>
                        <div className='botaoEdit'>
                            <span className='edit'><i class="bi bi-pencil-square" style={{ color: "white", background: 'none' }}></i></span>
                        </div>
                        <div className='botaoExcluir'>
                            <span className='excluir'><i class="bi bi-trash3" style={{ color: 'white', background: 'none' }}></i></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

