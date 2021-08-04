import { Link } from 'react-router-dom';
const GlobalMenu = () => {
    return(
        <nav>
            <Link to= "/">Home</Link>
            <Link to="/products"> Produtos</Link>
            <Link to="/tests">Testes</Link>
            <Link to ="/registerProduct">cadastro de Produtos</Link>
        </nav>

    );
}

export default GlobalMenu;