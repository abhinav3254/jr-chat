import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './Home.scss';


function Home() {

    const [makeUpData, setMakeUpData] = useState(null);

    // This function will be called when the component is mounted
    useEffect(() => {
        // Simulating API call
        const fetchData = async () => {
            try {
                const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
                setMakeUpData(response.data);
            } catch (error) {
                console.error('API error:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <div>
            {makeUpData && makeUpData.map((data, index) => {
                return (
                    <div className="card" key={index}>
                        <img className="image" src={data.image_link} alt={data.name} />
                        <h4>{data.name}</h4>
                        <div className="price">
                            <p>{data.price_sign}</p>
                            <p>{data.price}</p>
                        </div>
                        <div className="price">
                            <button>view details</button>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Home