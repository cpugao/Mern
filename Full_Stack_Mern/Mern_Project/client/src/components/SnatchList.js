import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const SnatchList = (props) => {
    const [athletes, setAthletes] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/athletes')
        .then((res) => {
            setAthletes(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Link to="/">Back to Main Page</Link>
            <br></br>
            <br></br>
            <h2>Snatches</h2>
            <hr></hr>
            <table style={{ marginLeft: "425px", width: "400px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Snatch</th>
                    </tr>
                </thead>
                {athletes.sort((a, b) => (a.snatch > b.snatch) ? -1 : 1).map((athlete, i) => {
                    return (
                        <tbody key={i}>
                            <tr>
                                <td>{athlete.firstName} {athlete.lastName}</td>
                                <td>{athlete.snatch} lbs</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default SnatchList;