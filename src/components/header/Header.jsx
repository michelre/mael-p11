import { Link, NavLink } from 'react-router-dom'
import LogoKasa from '../../assets/logo-kasa.svg'
import './header.scss'


const Header = () => {
    return <header>
            <Link to="/">
                <img src={LogoKasa} alt="Logo Kasa" />
            </Link>            
            <ul>
                <li>
                    <NavLink to='/'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='about'>A propos</NavLink>
                </li>
            </ul>
    </header>
}

export default Header