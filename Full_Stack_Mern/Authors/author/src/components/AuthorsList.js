import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorsList = (props) => {
    const { authors, setAuthors } = props;

    const handleDelete = (delId) => {
        axios.delete(`http://localhost:8000/api/authors/${delId}`)
        .then((res) => {
            const filteredAuthors = authors.filter((author) => {
                return author._id !== delId;
            });
            setAuthors(filteredAuthors);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h3>We have quotes by:</h3>
            <table style={{ marginLeft: "450px", width: "400px" }}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                {authors.map((author, i) => {
                    return (
                        <tbody key={i}>
                            <tr>
                                <td>{author.name}</td>
                                <td>
                                    <button onClick={(e) => navigate(`/edit/${author._id}`)}>Edit  </button> |  <button onClick={(e) => handleDelete(author._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
}

export default AuthorsList;