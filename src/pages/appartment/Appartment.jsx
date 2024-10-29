import { useLoaderData } from "react-router-dom";
import './appartment.scss';
import Rating from "../../components/rating/Rating";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Slider from "../../components/slider/Slider";
import Accordeon from "../../components/accordeon/Accordeon";

const Appartment = () => {
    const appartment = useLoaderData()


    if(!appartment){
        return
    }

    return <>

        <Slider
            pictures={appartment.pictures}
        />

        <div className="appartment-details">
            <div className="left">
                <h1 className="title">{appartment.title}</h1>
                <p>{appartment.location}</p>

                <div className="tags">
                    {appartment.tags && appartment.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
            <div className="right">
                <Host
                host={{ name: appartment.host.name, picture: appartment.host.picture }}
                />
                <div className='rating'>
                    <Rating
                    rating={appartment.rating}
                    />
                </div>
            </div>
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
