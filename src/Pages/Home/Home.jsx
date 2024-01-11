import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

import './Home.scss';


function Home() {

    const navigate = useNavigate();

    // This method will redirect you to the product page
    const handleViewDetailsClick = () => {
        // navigate('/product');
        alert('you will be redirected to product')
    }

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



    {/**
 * @author abhinav3254
 * 
 * This component is responsible for loading and displaying data in a grid layout.
 * The structure {makeUpData && makeUpData.map()} functions similarly to *ngFor in Angular,
 * iterating over the makeup data in a loop.
 */}
    return (
        <div className="grid-container">
            {makeUpData && makeUpData.map((data, index) => (
                <div className="card" key={index}>
                    {/*
                 * If the image fails to load, the onError event will replace it with a placeholder image.
                 */}
                    <img
                        className="image"
                        src={data.image_link}
                        alt={data.name}
                        onError={(e) => {
                            e.target.src = 'https://placehold.co/600x400';
                        }}
                    />

                    {/* Displaying the name of the makeup product */}
                    {/* <h4>{data.name}</h4> */}

                    {/* Displaying price information */}
                    {/* <div className="price">
                        <p>{data.price_sign}</p>
                        <p>{data.price}</p>
                    </div> */}

                    {/* Button for viewing details */}
                    <div className="price">
                        <button onClick={handleViewDetailsClick}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Home