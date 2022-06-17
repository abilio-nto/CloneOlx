import {React} from 'react'
import { Link } from 'react-router-dom'


const Home = () =>{
    return(
        <div>
            Pagina home
            <Link to="/About" >About</Link>
        </div>
    )
}

export default Home