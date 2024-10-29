import './thumbnail.scss'
import PropTypes from 'prop-types';

const Thumbnail = ({location}) => {
    return <div className='thumbnail' style={{backgroundImage: `url(${location.cover})`}}>
        <div className='thumbnail-content'>
            <p>{location.title}</p>
        </div>
    </div>
}

Thumbnail.propTypes = {
    location: PropTypes.object,
}

export default Thumbnail;
