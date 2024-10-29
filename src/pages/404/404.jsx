import './404.scss';
import Logo404 from '../../assets/logo-404.svg';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return <>
      <div>
        <div className='error-page'>
          <img src={Logo404} alt='error-404' className='logo-404' />
        </div>
          <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
        <div className='go-back'>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
    </>
}

export default ErrorPage;
