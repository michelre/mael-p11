import './slider.scss'
import PropTypes from 'prop-types';
import ArrowRight from '../../assets/arrow-right.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
import { useState } from 'react'

const Slider = ({pictures}) => {
    const [index, setIndex] = useState(0);


    const onPrevSlide = () => {
        if(index === 0){
            setIndex(pictures.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const onNextSlide = () => {
        if(index === pictures.length - 1){
            setIndex(0)
        } else  {
            setIndex(index + 1)
        }
    }


    return <div className="slider">
        <ul className="slider-container" style={{transform: `translateX(-${index * 100}%)`}}>
            {pictures.map((picture, idx) => <li key={`image-${idx}`}>
                <img src={picture} alt={`Slider image ${idx}`}/>
            </li>)}
        </ul>
        {(pictures.length > 1) ? <>
            <div className="buttons">
                <button onClick={onPrevSlide}>
                    <img src={ArrowLeft} alt="Slide précédente" />
                </button>
                <button onClick={onNextSlide}>
                    <img src={ArrowRight} alt="Slide suivante" />
                </button>
            </div>
            <div className="counter">
                {index + 1} / {pictures.length}
            </div>
            </> : ""}
        
    </div>
}

Slider.propTypes = {
    pictures: PropTypes.array,
}

export default Slider;