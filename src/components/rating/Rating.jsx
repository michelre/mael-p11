import './rating.scss'
import PropTypes from 'prop-types';
import StarActive from "../../assets/star-active.svg"
import StarInactive from "../../assets/star-inactive.svg"

const Rating = ({rating}) => {
    return <>
        {Array.from({length: parseInt(rating)}).map((e, idx) => {
            return <img key={`star-active-${idx}`} src={StarActive} alt={`star-active`} />
        } )}{Array.from({length: 5 - parseInt(rating)}).map((e, idx) => {            
            return <img key={`star-inactive-${idx}`} src={StarInactive} alt={`star-inactive`}/>
        } )}
    </>
}

Rating.propTypes = {
    rating: PropTypes.string,
}

export default Rating;