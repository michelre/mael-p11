import PropTypes from 'prop-types';
import './host.scss'

const Host = ({host}) => {
  const {name, picture} = host;

  return (
    <div className='host'>
      <p className='host-name'>{name}</p>
      <img src={picture} alt={`${name}'s profile`} className="profile-picture" />
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.object
}

export default Host;
