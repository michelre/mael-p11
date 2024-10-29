import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './appartment.scss';
import Rating from "../../components/rating/Rating";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Slider from "../../components/slider/Slider";
import Accordeon from "../../components/accordeon/Accordeon";

const Appartment = () => {
    const params = useParams()
    const [appartment, setAppartment] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/data.json')
        .then(resp => resp.json())
        .then(data => {
            const a = data.find(d => d.id === params.id)
            if(!a){
                navigate('/error')
            }
            setAppartment(a)
        })
    }, [])

    if(!appartment){
        return
    }

    return <>

        <Slider
            pictures={appartment.pictures}
        />

        <h1 className="title">{appartment.title}</h1>
        <p>{appartment.location}</p>
        <Host
          host={{ name: appartment.host.name, picture: appartment.host.picture }}
        />
          <div className='rating'>
            <Rating
              rating={appartment.rating}
            />
          </div>
        <div className="tags">
            {appartment.tags && appartment.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </div>
        <div className="accordeons">
            <Accordeon
                title="Description"

            >
                <p>{appartment.description}</p>
            </Accordeon>
            <Accordeon
                title="Equipements"
            >
                <ul>
                    {appartment.equipments.map(e => <li key={e}>{e}</li>)}
                </ul>

            </Accordeon>
        </div>
    </>
}

export default Appartment;
