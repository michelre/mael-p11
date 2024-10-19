import LogoKasa from '../../assets/logo-kasa-white.svg'
import './footer.scss'


const Footer = () => {
    return <footer>
        <div className='container'>
            <img src={LogoKasa} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>            
    </footer>
}

export default Footer