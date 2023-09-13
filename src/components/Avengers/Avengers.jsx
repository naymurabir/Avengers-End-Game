import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Avenger from "./Avenger/Avenger";


const Avengers = ({ handleAddToBookmarks }) => {

    const [avengers, setAvengers] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setAvengers(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h3 className="text-xl font-bold">Avengers: {avengers.length} </h3>

            <div className="grid grid-cols-2">
                {
                    avengers.map(avenger => <Avenger key={avenger.id} avenger={avenger} handleAddToBookmarks={handleAddToBookmarks} ></Avenger>)
                }
            </div>
        </div>
    );
};

Avengers.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Avengers;