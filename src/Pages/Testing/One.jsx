import React, { useState, useEffect } from "react";
import axios from "axios";

function One() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="One">
            <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div
                            style={{
                                width: "15em",
                                backgroundColor: "#CD8FFD",
                                padding: 2,
                                borderRadius: 10,
                                marginBlock: 10,
                            }}
                        >
                            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
                        </div>
                    );
                })}
            </center>
        </div>
    );
}

export default One;