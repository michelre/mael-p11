import './tag.scss'

const Tag = ({tag}) => {
    console.log('Tags received:', tag);
    return <div className='tags'>
        <p>{tag}</p>
    </div>
};

export default Tag;
