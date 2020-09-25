import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import AthletesList from '../components/AthletesList';

const Main = () => {
    const [athletes, setAthletes ] = useState([]);
    const [allAthletes, setAllAthletes] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/athletes')
        .then((res) => {
            setAllAthletes(res.data);
            setAthletes(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Link to="/create">Add a new athlete</Link>
            <div className="form-group" style={{ marginLeft: "425px", width: "400px" }}>
                <label>Search:  </label>
                <input
                    onChange={(event) => {
                        const val = event.target.value;

                        if (val === "") {
                            setAthletes(allAthletes);
                            return;
                        }
                        const filteredAthletes = allAthletes.filter((athlete) => {
                            return athlete.firstName.toLowerCase().includes(val.toLowerCase()) || athlete.lastName.toLowerCase().includes(val.toLowerCase());
                        });
                        setAthletes(filteredAthletes);
                    }}
                    className="form-control"
                />
            </div>
            <AthletesList athletes={athletes} setAthletes={setAthletes} />
        </div>
    )
}

export default Main;