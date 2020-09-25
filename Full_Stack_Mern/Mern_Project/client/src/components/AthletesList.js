import React from 'react';
import { navigate } from '@reach/router';

const AthletesList = (props) => {
    const { athletes } = props;

    return (
        <div>
            <h2>Athletes Getting Stronger</h2>
            <table style={{ marginLeft: "425px", width: "400px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {athletes.sort((a, b) => a.firstName > b.firstName ? 1 : -1).map((athlete, i) => {
                    return (
                        <tbody key={i}>
                            <tr>
                    <td>{athlete.firstName+" "+athlete.lastName}</td>
                                {/* <td>{athlete.firstName}{" "}{athlete.lastName}</td> */}
                                <td>
                                    <button onClick={(e) => navigate(`/${athlete._id}`)}>Details  </button> |  <button onClick={(e) => navigate(`/${athlete._id}/edit`)}>Edit</button> 
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
}

export default AthletesList;