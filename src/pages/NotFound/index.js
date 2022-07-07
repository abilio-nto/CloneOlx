import {React} from 'react'
import { Link } from 'react-router-dom'


const Home = () =>{
    return(
        <div>
            <h1>Página não encontrada</h1>
            <Link to="/" >Voltar para a home</Link>
        </div>
    )
}

export default Home