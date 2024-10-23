import './host.scss'

const Host = ({host}) => {
  const {name, picture} = host;

  return (
    <div className='host'>
      <img src={picture} alt={`${name}'s profile`} className="profile-picture" />
      <p className='host-name'>{name}</p>
    </div>
  );
};

export default Host;
