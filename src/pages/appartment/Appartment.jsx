import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../components/rating/Rating";

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
        <h1>Appartment {appartment.title}</h1>
        <Rating 
            rating={appartment.rating}
        />
    </>
}

export default Appartment;