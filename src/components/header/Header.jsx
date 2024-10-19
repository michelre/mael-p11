import { Link } from 'react-router-dom'
import LogoKasa from '../../assets/logo-kasa.svg'
import './header.scss'


const Header = () => {
    return <header>
            <Link to="/">
                <img src={LogoKasa} alt="Logo Kasa" />
            </Link>            
            <ul>
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='about'>A propos</Link>
                </li>
            </ul>
    </header>
}

export default Header