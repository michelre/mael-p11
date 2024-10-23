import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './appartment.scss';
import Rating from "../../components/rating/Rating";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";

const Appartment = () => {
    const params = useParams()
    const [appartment, setAppartment] = useState(null)

    useEffect(() => {
        fetch('/data.json')
        .then(resp => resp.json())
        .then(data => {
            const a = data.find(d => d.id === params.id)
            setAppartment(a)
        })
    }, [])

    if(!appartment){
        return
    }

    return <>
        <h1 className="title">{appartment.title}</h1>
        <p>{appartment.location}</p>
        <Host
          host={{ name: appartment.host.name, picture: appartment.host.picture }}
        />
        <Rating
            rating={appartment.rating}
        />
        <div className="tag">
            {appartment.tags && appartment.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </div>
    </>
}

export default Appartment;
