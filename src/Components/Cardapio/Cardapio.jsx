
import Card from '../Cards/Card.jsx'
import './Cardapio.css'
export default function Cardapio () {

return (

<div>
    <div>

<div className='pesquisa'>
<input className='buscar' placeholder='Pesquisar' type="text"></input>
<button><span className='botaoBusca'><i class="bi bi-search" style={{color: 'white'}}></i></span></button>
<div className='cartoes'>
<Card/><Card/><Card/><Card/>
</div>
</div>
</div>


</div>

)


}