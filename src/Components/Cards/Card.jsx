    import './cards.css'

    export default function Card(){
        return(
        <div>
        
    
    <div className='Cartao'>
    <div>
        <h2>hamburguer</h2>
    </div>
        <img width={150} src='https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg'></img>
        <div>
        <p className='valor'>R$35,50</p>
        <div className='estrela'>
        <span className='star'><i class="bi bi-star-fill " style={{color:'yellow', background: 'none'}}></i></span>
        <span className='star'><i class="bi bi-star-fill " style={{color:'yellow', background: 'none'}}></i></span>
        <span className='star'><i class="bi bi-star-fill " style={{color:'yellow', background: 'none'}}></i></span>
        <span className='star'><i class="bi bi-star-fill " style={{color:'yellow', background: 'none'}}></i></span>
        </div>
        <div className='excluirAndDelete'>
        <div className='botaoEdit'>
        <span className='edit'><i class="bi bi-pencil-square" style={{color:"white", background:'none'}}></i></span>
        </div>
        <div className='botaoExcluir'>
        <span className='excluir'><i class="bi bi-trash3" style={{color:'white', background:'none'}}></i></span>
        </div>
        </div>
      

    </div>
    </div>

        </div>
        )
    }

