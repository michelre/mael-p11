import PropTypes from 'prop-types';
import './accordeon.scss'
import ArrowDown from '../../assets/arrow-down.svg'
import { useRef, useState } from 'react'

const Accordeon = ({title, children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const accordeonContentRef = useRef(null)

    const onOpenAccordeon = () => {
        setIsOpen(!isOpen)
    }

    const getAccordeonHeight = () => {
        if(!isOpen){
            return 0
        }
        return accordeonContentRef?.current?.getBoundingClientRect().height
    }

    return <div className={`accordeon ${isOpen ? 'open' : ''}`}>
        <div className="title">
            <h3>{title}</h3>
            <button onClick={onOpenAccordeon}>
                <img src={ArrowDown} alt='ouvrir accordéon'/>
            </button>
        </div>
        <div className="accordeon-content" style={{height: getAccordeonHeight() }}>
            <div className="accordeon-children" ref={accordeonContentRef}>
                {children}
            </div>            
        </div>
    </div>
}

Accordeon.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}


export default Accordeon