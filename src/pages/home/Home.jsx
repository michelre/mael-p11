import Banner from "../../components/banner/Banner";
import './home.scss';
import { useEffect, useState } from "react";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import { Link } from "react-router-dom";


const Home = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(resp => resp.json())
        .then(data => {
            setLocations(data)
        })
    }, [])


    return <>
        <div>
            <div className="home-banner">
                <Banner/>
            </div>
            <ul className="locations">
                {locations.map(location => <li key={location.id}>
                    <Link to={`appartments/${location.id}`}>
                        <Thumbnail 
                            location={location}
                        />
                    </Link>
                </li>)}
            </ul>
        </div>        
    </>
}

export default Home;