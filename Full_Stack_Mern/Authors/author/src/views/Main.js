import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import AuthorsList from '../components/AuthorsList';


const Main = () => {
    const [ authors, setAuthors ] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            setAuthors(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Link to="/create">Add an author</Link>
            <AuthorsList authors={authors} setAuthors={setAuthors} />
        </div>
    )
}

export default Main;