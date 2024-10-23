import './thumbnail.scss'

const Thumbnail = ({location}) => {
    return <div className='thumbnail' style={{backgroundImage: `url(${location.cover})`}}>
        <div className='thumbnail-content'>
            <p>{location.title}</p>
        </div>
    </div>
}

export default Thumbnail;
