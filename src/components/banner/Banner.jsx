import PropTypes from 'prop-types';
import './banner.scss'

const Banner = ({picture, content}) => {
    return <div className='banner'>
        <img src={picture} alt='banner image' />
        <p className='content'>{content ? content : ''}</p>

    </div>
}

Banner.propTypes = {
    picture: PropTypes.string,
    content: PropTypes.string
}

export default Banner;